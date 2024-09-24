from rest_framework import serializers
from .models import Tenant, EnergyPurchase, MeterReading

class TenantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tenant
        fields = '__all__'

class EnergyPurchaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = EnergyPurchase
        fields = '__all__'

class MeterReadingSerializer(serializers.ModelSerializer):
    class Meta:
        model = MeterReading
        fields = '__all__'
