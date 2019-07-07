from django.shortcuts import render
from rest_framework.views import APIView
from .models import Payment
from rest_framework import status
from rest_framework.response import Response
from .serializers import PaymentSerializer
from ngo.models import Ngo
from users.models import user


class PaymentCreateView(APIView):
    def post(self, request, *args, **kwargs):
        data = request.data
        data["user"] = user.objects.get(username=request.data.get("user"))
        data["ngo"] = user.objects.get(username=request.data.get("ngo"))
        serializer = PaymentSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "amount donated successfully"}, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(serializer.errors, status=status.HTTP_401_UNAUTHORIZED)


class PaymentUserView(APIView):
    def get(self, request, *args, **kwargs):
        query_user = user.objects.get(username=request.user.username)
        payment_set = query_user.payment_set.all()
        serializer = PaymentSerializer(payment_set, many=True)
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)


class PaymentNgoView(APIView):
    def get(self, request, *args, **kwargs):
        query_ngo = Ngo.objects.get(username=request.user.username)
        payment_set = query_ngo.payment_set.all()
        serializer = PaymentSerializer(payment_set, many=True)
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
