from django.db import models
from django.contrib.auth.models import User
from users.models import user


class Ngo(User, models.Model):

    class Meta:
        verbose_name = ("Ngo")
        verbose_name_plural = ("Ngos")

    def __str__(self):
        return self.first_name

    def get_absolute_url(self):
        return reverse("Ngo_detail", kwargs={"pk": self.pk})
    Ngo_certificate = models.URLField(
        default='https://www.google.com', max_length=200)
    Ngo_website = models.URLField(
        default='https://www.google.com', max_length=200)
    users = models.ManyToManyField(user, verbose_name=(
        "users_to_ngo_through_payment"), through="payment.Payment")
    IsNgo = True


class Profile(models.Model):

    class Meta:
        verbose_name = ("Profile")
        verbose_name_plural = ("Profiles")

    def get_absolute_url(self):
        return reverse("Profile_detail", kwargs={"pk": self.pk})
    image = models.ImageField(default='www.google.com', upload_to='profile_pics',
                              height_field=None, width_field=None, max_length=None)
    amount_collected = models.IntegerField(default=0)
    long_description = models.TextField()
    location = models.TextField()
    goal = models.TextField(max_length=1000)
    contact = models.DecimalField(
        ("contact_number"), max_digits=10, decimal_places=0)
    Ngo = models.OneToOneField(Ngo, on_delete=models.CASCADE)
