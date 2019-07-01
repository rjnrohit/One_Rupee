from django.db import models
from users.models import user
from ngo.models import Ngo
# Create your models here.


class Payment(models.Model):
    transaction_id = models.DecimalField(
        ("transaction_id"), max_digits=100, decimal_places=0)
    transaction_time = models.DateTimeField(
        ("transaction_time"), auto_now=False, auto_now_add=True)
    payment_status = models.BooleanField(("payment_status"), default=False)
    amount_transacted = models.IntegerField(("amount_funded"), default=1)
    ngo = models.ForeignKey(Ngo, verbose_name=(
        "to_ngo"), on_delete=models.CASCADE)
    user = models.ForeignKey(user, verbose_name=(
        "through_user"), on_delete=models.CASCADE)

    class Meta:
        verbose_name = ("Payment")
        verbose_name_plural = ("Payments")

    def __str__(self):
        return str(self.transaction_id)

    def get_absolute_url(self):
        return reverse("Payment_detail", kwargs={"pk": self.pk})
