from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from django.views.decorators.csrf import csrf_exempt
from .models import Payment, Payment_error, Payment_success
from rest_framework import status
from rest_framework.response import Response
from .serializers import PaymentSerializer, Payment_successSerializer, Payment_errorSerializer
from ngo.models import Ngo
from users.models import user
from rest_framework.permissions import IsAuthenticated
from . import Checksum
from .transactionStatusApi import verify_response
order_id = 0


def return_id():
    global order_id
    order_id = order_id + 1
    return order_id


# class PaymentCreateView(APIView):
#     permission_classes = (IsAuthenticated,)

#     def post(self, request, *args, **kwargs):
#         data = request.data
#         data["user"] = user.objects.get(username=request.data.get("user"))
#         data["ngo"] = user.objects.get(username=request.data.get("ngo"))
#         serializer = PaymentSerializer(data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response({"message": "amount donated successfully"}, status=status.HTTP_202_ACCEPTED)
#         else:
#             return Response(serializer.errors, status=status.HTTP_401_UNAUTHORIZED)


class PaymentUserView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, *args, **kwargs):
        query_user = user.objects.get(username=request.user.username)
        payment_set = query_user.payment_set.all()
        serializer = PaymentSerializer(payment_set, many=True)
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)


class PaymentNgoView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, *args, **kwargs):
        query_ngo = Ngo.objects.get(username=request.user.username)
        payment_set = query_ngo.payment_set.all()
        serializer = PaymentSerializer(payment_set, many=True)
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)


class PayView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, *args, **kwargs):
        amount = request.data["amount"]
        to_ngo = Ngo.objects.get(username=request.data["ngo"])
        try:
            query_user = user.objects.get(username=request.user.username)
        except:
            query_user = Ngo.objects.get(username=request.user.username)
        if amount < 1:
            Response({"error": "please donate atleast one rupee"},
                     status=status.HTTP_400_BAD_REQUEST)
        else:
            request_dict = {
                'MID': 'my_merchant id',
                'ORDER_ID': str(request.user.pk)+'@'+str(to_ngo.pk)+'@'+str(return_id()),
                'CUST_ID': str(request.user.pk),
                'TXN_AMOUNT': str(request.data["amount"]),
                'CHANNEL_ID': 'WEB',  # we should change for production
                'WEBSITE': 'WEBSTAGING',  # we should change for production
                'INDUSTRY_TYPE_ID': "Retail",  # we should change for production
                "MOBILE_NO": str(query_user.mob_no) if query_user.IsNgo else '9680549779',
                "EMAIL": str(query_user.Email),
                'CALLBACK_URL': 'http://localhost:8000/payment//handleRequestFromPaytm/'
            }
            checksum = Checksum.generate_checksum(
                request_dict, "MY_MERCHANT_KEY_HERE")
            paytm_post_url = 'https://securegw-stage.paytm.in/order/process'
            return Response({'request_dict': request_dict, 'checksum': checksum, 'paytm_post_url': paytm_post_url}, status=status.HTTP_200_OK)


# Endpoints:
# Staging: https: // securegw-stage.paytm.in/order/process
# Production: https: // securegw.paytm.in/order/process
@csrf_exempt
@api_view(['POST', 'GET'])
@permission_classes([])
def handleRequestFromPaytm(request, format=None):
    payment_processed = 0
    if request.method == 'POST':
        print(request.POST)
        data = request.POST
        checksumhash = request.POST["CHECKSUMHASH"]
        order_id = request.POST["ORDERID"].split('@')
        pay_user = user.objects.get(pk=int(order_id[0]))
        pay_to_ngo = Ngo.objects.get(pk=int(order_id[1]))
        data.update({'user': pay_user, 'ngo': pay_to_ngo})
        serializer_payment = PaymentSerializer(data=data)
        del request.POST["CHECKSUMHASH"]
        isValidChecksum = Checksum.verify_checksum(
            request.POST, "YOUR_MERCHANT_KEY_HERE", checksumhash)
        if isValidChecksum:
            print("Checksum Matched")
            response = verify_response(
                request.POST["MID"], 'my_merchant_key', request.POST["ORDERID"], checksumhash)
            if response["STATUS"] == 'TXN_SUCCESS':
                serializer_result = Payment_successSerializer(response)
                success = 1
            else:
                serializer_result = Payment_errorSerializer(response)
                success = 0
            if serializer_payment.is_valid():
                if success:
                    if serializer_result.is_valid():
                        serializer_result.save()
                        payment_success = Payment_success.objects.get(
                            orderId=serializer_result.data["ORDERID"])
                        serializer_payment.save(
                            payment_success=payment_success)
                        payment_processed = serializer_result["STATUS"]
                        return Response(serializer_payment.data, status=status.HTTP_200_OK)

                    else:
                        return Response(serializer_result.errors, status=status.HTTP_400_BAD_REQUEST)
                else:
                    if serializer_result.is_valid():
                        serializer_result.save()
                        payment_error = Payment_error.objects.get(
                            orderId=serializer_result.data["ORDERID"])
                        serializer_payment.save(
                            payment_error=payment_error)
                        payment_processed = serializer_result["STATUS"]
                        return Response(serializer_payment.data, status=status.HTTP_200_OK)
                    else:
                        return Response(serializer_result.errors, status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response(serializer_payment.errors, status=status.HTTP_400_BAD_REQUEST)

        else:
            print("Checksum Mismatched")

    elif request.method == 'GET':
        if request.user.is_authenticated:
            if payment_processed:
                return Response({"status": payment_processed}, status=status.HTTP_200_OK)
        else:
            return Response({"error": "request from unauthentictaed user"}, status=status.HTTP_400_BAD_REQUEST)


"""
# sample form =>requesting to paytm
<html>
   <head>
      <title>Merchant Check Out Page</title>
   </head>
   <body>
      <center>
         <h1>Please do not refresh this page...</h1>
      </center>
      <form method="post" action="https://securegw-stage.paytm.in/order/process" name="paytm">
         <table border="1">
            <tbody>
               <input type="hidden" name="MID" value="YOUR_MID_HERE">
               <input type="hidden" name="WEBSITE" value="YOUR_WEBSITE_HERE">
               <input type="hidden" name="ORDER_ID" value="YOUR_ORDER_ID">
               <input type="hidden" name="CUST_ID" value="CUSTOMER_ID">
               <input type="hidden" name="MOBILE_NO" value="CUSTOMER_MOBILE_NUMBER">
               <input type="hidden" name="EMAIL" value="CUSTOMER_EMAIL">
               <input type="hidden" name="INDUSTRY_TYPE_ID" value="YOUR_INDUSTRY_TYPE_ID_HERE">
               <input type="hidden" name="CHANNEL_ID" value="YOUR_CHANNEL_ID">
               <input type="hidden" name="TXN_AMOUNT" value="ORDER_TRANSACTION_AMOUNT">
               <input type="hidden" name="CALLBACK_URL" value="YOUR_CALLBACK_URL">
               <input type="hidden" name="CHECKSUMHASH" value="GENERATED_CHECKSUM_VALUE">
            </tbody>
         </table>
         <script type="text/javascript">
            document.paytm.submit();
         </script>
      </form>
   </body>
</html>
"""

"""
sample form <= receiving from paytm

<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
		<title>Paytm Secure Online Payment Gateway</title>
	</head>
	<body>
		<table align='center'>
			<tr>
				<td><STRONG>Transaction is being processed,</STRONG></td>
			</tr>
			<tr>
				<td><font color='blue'>Please wait ...</font></td>
			</tr>
			<tr>
				<td>(Please do not press 'Refresh' or 'Back' button</td>
			</tr>
		</table>
		<FORM NAME='TESTFORM' ACTION='YOUR_CALLBACK_URL' METHOD='POST'>
			<input type='hidden' name='CURRENCY' value='PAYMENT_CURRENCY'>
			<input type='hidden' name='GATEWAYNAME' value='GATEWAY_USED_BY_PAYTM'>
			<input type='hidden' name='RESPMSG' value='PAYTM_RESPONSE_MESSAGE_DESCRIPTION'>
			<input type='hidden' name='BANKNAME' value='BANK_NAME_OF_ISSUING_PAYMENT_MODE'>
			<input type='hidden' name='PAYMENTMODE' value='PAYMENT_MODE_USED_BY_CUSTOMER'>
			<input type='hidden' name='MID' value='YOUR_MID_HERE'>
			<input type='hidden' name='RESPCODE' value='PAYTM_RESPONSE_CODE'>
			<input type='hidden' name='TXNID' value='PAYTM_TRANSACTION_ID'>
			<input type='hidden' name='TXNAMOUNT' value='ORDER_TRANSACTION_AMOUNT'>
			<input type='hidden' name='ORDERID' value='YOUR_ORDER_ID'>
			<input type='hidden' name='STATUS' value='PAYTM_TRANSACTION_STATUS'>
			<input type='hidden' name='BANKTXNID' value='BANK_TRANSACTION_ID'>
			<input type='hidden' name='TXNDATE' value='TRANSACTION_DATE_TIME'>
			<input type='hidden' name='CHECKSUMHASH' value='PAYTM_GENERATED_CHECKSUM_VALUE'>
		</FORM>
	</body>
	<script type="text/javascript">  document.forms[0].submit();</script>
</html>
"""
