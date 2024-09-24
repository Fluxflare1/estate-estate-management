from rest_framework import viewsets
from .models import EnergyBillingAccount, MeterReading, EnergyPurchase
from .serializers import EnergyBillingAccountSerializer, MeterReadingSerializer, EnergyPurchaseSerializer

class EnergyBillingAccountViewSet(viewsets.ModelViewSet):
    queryset = EnergyBillingAccount.objects.all()
    serializer_class = EnergyBillingAccountSerializer

class MeterReadingViewSet(viewsets.ModelViewSet):
    queryset = MeterReading.objects.all()
    serializer_class = MeterReadingSerializer

class EnergyPurchaseViewSet(viewsets.ModelViewSet):
    queryset = EnergyPurchase.objects.all()
    serializer_class = EnergyPurchaseSerializer
