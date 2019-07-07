from rest_framework import serializers
from .models import Payment
from ngo.serializers import NgoSerializer
from users.serializers import UserSerializer


class PaymentSerializer(serializers.ModelSerializer):
    ngo = NgoSerializer(read_only=True, many=False)
    user = UserSerializer(read_only=True, many=False)

    class Meta:
        model = Payment
        fields = (
            'pk',
            '__all__'
        )
