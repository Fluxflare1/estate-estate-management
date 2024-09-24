# backend/energy-billings/energy_consumption/views.py
from rest_framework import viewsets, permissions
from .models import EnergyBillingAccount
from .serializers import EnergyBillingAccountSerializer

class EnergyBillingAccountViewSet(viewsets.ModelViewSet):
    queryset = EnergyBillingAccount.objects.all()
    serializer_class = EnergyBillingAccountSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(landlord=self.request.user)
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
