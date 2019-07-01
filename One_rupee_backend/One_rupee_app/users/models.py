from django.db import models
from django.contrib.auth.models import User


class user(User, models.Model):
    mob_no = models.DecimalField(
        ("Mobile_number"), max_digits=10, decimal_places=0)
    IsNgo = False


class Profile(models.Model):
    name = models.TextField(max_length=100)
    image = models.ImageField()
    user = models.OneToOneField(user, on_delete=models.CASCADE)
    amount_donated = models.IntegerField(("amount_donated"), default=0)
    fb_link = models.URLField()
