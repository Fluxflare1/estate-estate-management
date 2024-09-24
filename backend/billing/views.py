from rest_framework import viewsets
from .models import Tenant, EnergyPurchase, MeterReading
from .serializers import TenantSerializer, EnergyPurchaseSerializer, MeterReadingSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .chat_model import get_response  # Make sure to import the AI model

class TenantViewSet(viewsets.ModelViewSet):
    queryset = Tenant.objects.all()
    serializer_class = TenantSerializer

class EnergyPurchaseViewSet(viewsets.ModelViewSet):
    queryset = EnergyPurchase.objects.all()
    serializer_class = EnergyPurchaseSerializer

class MeterReadingViewSet(viewsets.ModelViewSet):
    queryset = MeterReading.objects.all()
    serializer_class = MeterReadingSerializer

@api_view(['POST'])
def chat(request):
    user_message = request.data.get('message')
    bot_response = get_response(user_message)
    return Response({'response': bot_response})
