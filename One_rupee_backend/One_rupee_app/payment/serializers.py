from rest_framework import serializers
from .models import Payment, Payment_success, Payment_error
from ngo.serializers import NgoSerializer
from users.serializers import UserSerializer


class Payment_successSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment_success
        fields = (
            '__all__'
        )


class Payment_errorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment_error
        fields = (
            '__all__'
        )


class PaymentSerializer(serializers.ModelSerializer):
    ngo = NgoSerializer(read_only=True, many=False)
    user = UserSerializer(read_only=True, many=False)
    payment_success = Payment_successSerializer(many=False)
    payment_error = Payment_errorSerializer(many=False)

    class Meta:
        model = Payment
        fields = (
            'pk',
            '__all__'
        )
