from django.db import models
from django.contrib.auth.models import User
from django.shortcuts import reverse


class user(User, models.Model):
    Email = models.EmailField(
        ("email_user"), max_length=254, unique=True, blank=False)
    mob_no = models.DecimalField(
        ("Mobile_number"), max_digits=10, decimal_places=0, blank=False)
    IsNgo = False

    class Meta:
        verbose_name = ("user")
        verbose_name_plural = ("users")

    def __str__(self):
        return self.username

    def get_absolute_url(self):
        return reverse("user_detail", kwargs={"pk": self.pk})


class Profile(models.Model):
    name = models.TextField(max_length=100, blank=False)
    image = models.ImageField(upload_to='profile_pics')
    user = models.OneToOneField(user, on_delete=models.CASCADE)
    amount_donated = models.IntegerField(("amount_donated"), default=0)
    fb_link = models.URLField(blank=True)

    class Meta:
        verbose_name = ("Profile")
        verbose_name_plural = ("Profiles")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("Profile_detail", kwargs={"pk": self.pk})
