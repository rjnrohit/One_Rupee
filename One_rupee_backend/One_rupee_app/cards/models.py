from django.db import models
from ngo.models import Ngo
# Create your models here.


class Card(models.Model):
    title = models.CharField(("title"), max_length=300)
    category = models.CharField(("category"), max_length=50)
    shortDescription = models.TextField(("shortDescription"))
    ngo = models.ForeignKey(Ngo, verbose_name=(
        "connected_ngo"), on_delete=models.CASCADE)

    class Meta:
        verbose_name = ("Card")
        verbose_name_plural = ("Cards")

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("Card_detail", kwargs={"pk": self.pk})
