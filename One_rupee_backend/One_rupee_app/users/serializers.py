from rest_framework import serializers
from .models import user, Profile


class UserSerializer(serializers.ModelSerializer):
    #url = serializers.CharField(source='get_absolute_url', read_only=True)

    class Meta:
        model = user
        fields = (
            #'url ',
            'username',
            'Email',
            'password',
            'first_name',
            'last_name',
            'mob_no',
            'id',
        )


class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False)

    class Meta:
        model = Profile
        fields = (
            'name',
            'image',
            'user',
            'amount_donated',
            'fb_link'
        )
