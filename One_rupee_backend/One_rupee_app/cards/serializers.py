from rest_framework import serializers
from .models import Card
from ngo.serializers import NgoSerializer


class CardSerializer(serializers.ModelSerializer):
    ngo = NgoSerializer(read_only=True)
    #url = serializers.CharField(source='get_absolute_url', read_only=True)

    class Meta:
        model = Card
        fields = (
            #'url ',
            'pk',
            'title',
            'category',
            'shortDescription',
            'longDescription',
            'amount_requested',
            'ngo'
        )
