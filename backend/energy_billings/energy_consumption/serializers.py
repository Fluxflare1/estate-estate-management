from rest_framework import serializers
from .models import Payment

class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = '__all__'
from rest_framework import serializers
from .models import EnergyBillingAccount, MeterReading, EnergyPurchase

class EnergyBillingAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = EnergyBillingAccount
        fields = '__all__'

class MeterReadingSerializer(serializers.ModelSerializer):
    class Meta:
        model = MeterReading
        fields = '__all__'

class EnergyPurchaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = EnergyPurchase
        fields = '__all__'
