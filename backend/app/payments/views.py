from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Payment
from .serializers import PaymentSerializer

@api_view(['GET'])
def get_payments(request):
    payments = Payment.objects.all()
    serializer = PaymentSerializer(payments, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def add_payment(request):
    serializer = PaymentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)

@api_view(['PUT'])
def update_payment(request, pk):
    payment = Payment.objects.get(id=pk)
    serializer = PaymentSerializer(payment, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)
# apps/payments/views.py

from rest_framework import viewsets
from .models import Payment
from .serializers import PaymentSerializer

class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer
def process_advance_payment(request):
    # Logic for processing advance payments
    pass
# backend/apps/payments/views.py

from rest_framework import viewsets
from .models import CashTransaction
from .serializers import CashTransactionSerializer

class CashTransactionViewSet(viewsets.ModelViewSet):
    queryset = CashTransaction.objects.all()
    serializer_class = CashTransactionSerializer

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)
# backend/apps/payments/views.py
from rest_framework import generics
from .models import Payment
from .serializers import PaymentSerializer

class PaymentListCreateView(generics.ListCreateAPIView):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer

class PaymentRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer
from rest_framework import viewsets
from .models import Payment
from .serializers import PaymentSerializer

class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer
from rest_framework import viewsets
from .models import Payment
from .serializers import PaymentSerializer

class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer
