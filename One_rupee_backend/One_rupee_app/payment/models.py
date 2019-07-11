from django.db import models
from users.models import user
from ngo.models import Ngo
from django.shortcuts import reverse
# Create your models here.


class Payment_success(models.Model):
    txnId = models.CharField(("TXNID"), max_length=64)
    bankTxnId = models.CharField(("BANKTXNID"), max_length=100)
    orderId = models.CharField(("ORDERID"), max_length=50)
    txnAmount = models.CharField(("TXNAMOUNT"), max_length=10)
    status = models.CharField(("STATUS"), max_length=20)
    txnType = models.CharField(("TXNTYPE"), max_length=5)
    gatewayName = models.CharField(("GATEWAYNAME"), max_length=15)
    respCode = models.CharField(("RESPCODE"), max_length=10)
    respMsg = models.CharField(("RESPMSG"), max_length=500)
    bankName = models.CharField(("BANKNAME"), max_length=500)
    mid = models.CharField(("MID"), max_length=20)
    paymentMode = models.CharField(("PAYMENTMODE"), max_length=15)
    refundAmt = models.CharField(("REFUNDAMT"), max_length=10)
    txnDate = models.DateTimeField(
        ("TXNDATE"), auto_now=False, auto_now_add=False)


class Payment_error(models.Model):
    txnId = models.CharField(("TXNID"), max_length=64)
    bankTxnId = models.CharField(("BANKTXNID"), max_length=100)
    orderId = models.CharField(("ORDERID"), max_length=50)
    txnAmount = models.CharField(("TXNAMOUNT"), max_length=10)
    status = models.CharField(("STATUS"), max_length=20)
    txnType = models.CharField(("TXNTYPE"), max_length=5)
    respCode = models.CharField(("RESPCODE"), max_length=10)
    respMsg = models.CharField(("RESPMSG"), max_length=500)
    mid = models.CharField(("MID"), max_length=20)
    refundAmt = models.CharField(("REFUNDAMT"), max_length=10)
    txnDate = models.DateTimeField(
        ("TXNDATE"), auto_now=False, auto_now_add=False)


class Payment(models.Model):
    currency = models.CharField(("CURRENCY"), max_length=3)
    gatewayName = models.CharField(("GATEWAYNAME"), max_length=15)
    respMsg = models.CharField(("RESPMSG"), max_length=500)
    bankName = models.CharField(("BANKNAME"), max_length=500)
    paymentMode = models.CharField(("PAYMENTMODE"), max_length=15)
    mid = models.CharField(("MID"), max_length=20)
    respCode = models.CharField(("RESPCODE"), max_length=10)
    txnId = models.CharField(("TXNID"), max_length=64)
    txnAmount = models.CharField(("TXNAMOUNT"), max_length=10)
    orderId = models.CharField(("ORDERID"), max_length=50)
    status = models.CharField(("STATUS"), max_length=20)
    bankTxnId = models.CharField(("BANKTXNID"), max_length=100)
    txnDate = models.DateTimeField(
        ("TXNDATE"), auto_now=False, auto_now_add=False)

    ngo = models.ForeignKey(Ngo, verbose_name=(
        "to_ngo"), on_delete=models.CASCADE)
    user = models.ForeignKey(user, verbose_name=(
        "through_user"), on_delete=models.CASCADE)
    payment_success = models.OneToOneField(
        Payment_success, verbose_name=("payment_success"), on_delete=models.CASCADE)
    payment_error = models.OneToOneField(
        Payment_error, verbose_name=("payment_error"), on_delete=models.CASCADE)

    class Meta:
        verbose_name = ("Payment")
        verbose_name_plural = ("Payments")

    def __str__(self):
        return str(self.transaction_id)

    def get_absolute_url(self):
        return reverse("Payment_detail", kwargs={"pk": self.pk})


"""
{
    "TXNID": "20180926111212800110168766100018551",
    "BANKTXNID": "5583250",
    "ORDERID": "order1",
    "TXNAMOUNT": "100.12",
    "STATUS": "TXN_SUCCESS",
    "TXNTYPE": "SALE",
    "GATEWAYNAME": "WALLET",
    "RESPCODE": "01",
    "RESPMSG": "Txn Success",
    "BANKNAME": "WALLET",
    "MID": "rxazcv89315285244163",
    "PAYMENTMODE": "PPI",
    "REFUNDAMT": "0.00",
    "TXNDATE": "2018-09-26 13:50:57.0"
}
"""
"""
{   
    "TXNID":"20180927111212800110168666800020875",
    "BANKTXNID":"",
    "ORDERID":"order1",
    "TXNAMOUNT":"100.12",
    "STATUS":"PENDING",
    "TXNTYPE":"SALE",
    "RESPCODE":"810",
    "RESPMSG":"Txn Failed",
    "MID":"rxazcv89315285244163",
    "REFUNDAMT":"0.0",
    "TXNDATE":"2018-09-27 10:07:15.0"
}
"""
