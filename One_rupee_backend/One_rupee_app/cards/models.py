from django.db import models
from ngo.models import Ngo
from django.shortcuts import reverse
# Create your models here.


class Card(models.Model):
    CATEGORY_CHOICES = (
        ('AGC',
         'Age care (care for the aged/Older persons)'),
        ('AGR', 'Agriculture'),
        ('AW', 'Animal Welfare'),
        ('ANC', 'Art & Craft'),
        ('CE', 'Child Education'),
        ('CUD', 'Cities/Urban Development'),
        ('CD', 'Community Development'),
        ('CNH', ' Culture & Heritage'),
        ('D', 'Disability'),
        ('DM', 'Disaster Management'),
        ('EDU', 'Education'),
        ('ENVI', 'Environmental issues'),
        ('HNH', 'Health & Hygene'),
        ('HA', ' HIV/AIDS'),
        ('HS', 'Housing & Slums'),
        ('P', 'Population'),
        ('PR', 'Poverty Removal'),
        ('RD', 'Rural Development'),
        ('STD', 'Science & Technology Development'),
        ('TP', 'Tribal people'),
        ('WM', 'Waste Management'),
        ('DW', 'Drinking Water'),
        ('WO', 'Women'),
        ('O', 'others')


    )
    title = models.CharField(("title"), max_length=300, blank=False)
    category = models.CharField(
        ("category"), max_length=50, choices=CATEGORY_CHOICES, blank=False)
    shortDescription = models.TextField(("shortDescription"))
    amount_requested = models.DecimalField(
        ("amount_requested"), max_digits=10, decimal_places=0, default=0)
    ngo = models.ForeignKey(Ngo, verbose_name=(
        "connected_ngo"), on_delete=models.CASCADE)

    class Meta:
        verbose_name = ("Card")
        verbose_name_plural = ("Cards")

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("Card_detail", kwargs={"pk": self.pk})
