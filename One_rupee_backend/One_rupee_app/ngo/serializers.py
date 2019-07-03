from rest_framework import serializers
from .models import Ngo, Profile


class NgoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ngo
        fields = (
            'username',
            'ngo_name',
            'email',
            'password',
            'Ngo_certificate',
            'Ngo_website'
        )
