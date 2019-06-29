from django.db import models
from django.contrib.auth.models import User
from users.models import user


class Ngo(User, models.Model):

    class Meta:
        verbose_name = ("Ngo")
        verbose_name_plural = ("Ngos")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("Ngo_detail", kwargs={"pk": self.pk})
    Ngo_certificate = models.URLField(
        default='https://www.google.com', max_length=200)
    Ngo_website = models.URLField(
        default='https://www.google.com', max_length=200)
    users = models.ManyToManyField(user, verbose_name=(
        "users_to_ngo_through_payment"), through='Payment')


class Profile(models.Model):

    class Meta:
        verbose_name = ("Profile")
        verbose_name_plural = ("Profiles")

    def __str__(self):
        return self.Ngo.name

    def get_absolute_url(self):
        return reverse("Profile_detail", kwargs={"pk": self.pk})
    image = models.ImageField(default='www.google.com', upload_to=None,
                              height_field=None, width_field=None, max_length=None)
    amount_collected = models.IntegerField(default=0)
    long_description = models.TextField()
    location = models.TextField()
    goal = models.TextField(max_length=1000)
    contact = models.DecimalField(
        ("contact_number"), max_digits=10, decimal_places=0)
    Ngo = models.OneToOneField(Ngo, on_delete=models.CASCADE)


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
        return self.transaction_id

    def get_absolute_url(self):
        return reverse("Payment_detail", kwargs={"pk": self.pk})
