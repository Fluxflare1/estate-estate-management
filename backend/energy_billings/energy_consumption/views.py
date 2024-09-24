# backend/energy-billings/energy_consumption/views.py
from django.core.mail import send_mail

def send_notification_email(subject, message, recipient_list):
    send_mail(
        subject,
        message,
        'from@example.com',
        recipient_list,
        fail_silently=False,
    )

class MeterReadingViewSet(viewsets.ModelViewSet):
    # Existing code...
    
    def perform_create(self, serializer):
        super().perform_create(serializer)
        # Send email notification
        send_notification_email('New Meter Reading', 'A new meter reading has been entered.', ['tenant@example.com'])
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
