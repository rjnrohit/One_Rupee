from rest_framework import serializers
from .models import user, Profile


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = user
        fields = (
            'username',
            'email',
            'password',
            'first_name',
            'last_name',
            'mob_no'
        )
