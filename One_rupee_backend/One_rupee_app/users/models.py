from django.db import models
from django.contrib.auth.models import User


class user(User, models.Model):
    mob_no = models.IntegerField(max_length=10)


class Profile(models.Model):
    name = models.TextField(max_length=100)
    image = models.ImageField()
    user = models.OneToOneField(user, on_delete=models.CASCADE)
    amount_donated = models.IntegerField()
    fb_link = models.URLField()
