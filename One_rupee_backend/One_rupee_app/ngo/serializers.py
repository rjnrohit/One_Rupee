from rest_framework import serializers
from .models import Ngo, Profile


class NgoSerializer(serializers.ModelSerializer):

    #url = serializers.CharField(source='get_absolute_url', read_only=True)

    class Meta:
        model = Ngo
        fields = (
            #'url ',
            'username',
            'ngo_name',
            'Email',
            'password',
            'category',
            'Ngo_certificate',
            'Ngo_website',

        )


class ProfileSerializer(serializers.ModelSerializer):
    Ngo = NgoSerializer(many=False)

    class Meta:
        model = Profile
        fields = (
            '__all__',
        )
