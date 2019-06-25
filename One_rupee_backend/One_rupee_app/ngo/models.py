from django.db import models
from django.contrib.auth.models import User


class Ngo(models.Model, User):

    class Meta:
        verbose_name = _("Ngo")
        verbose_name_plural = _("Ngos")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("Ngo_detail", kwargs={"pk": self.pk})
    Ngo_certificate = models.URLField(
        default='https://www.google.com', max_length=200)
    short_description = models.TextField(max_length=1000)
    Ngo_website = models.URLField(
        default='https://www.google.com', max_length=200)


class Profile(models.Model):

    class Meta:
        verbose_name = _("Profile")
        verbose_name_plural = _("Profiles")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("Profile_detail", kwargs={"pk": self.pk})
    image = models.ImageField(default='www.google.com', upload_to=None,
                              height_field=None, width_field=None, max_length=None)
    amount_collected = models.IntegerField()
    long_description = models.TextField()
    location = models.TextField()
    goal = models.TextField(max_length=1000)
    contact = models.IntegerField(max_length=10)
    Ngo = models.OneToOneField(Ngo, on_delete=models.CASCADE)
