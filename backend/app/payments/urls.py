# backend/apps/payments/utils.py
from .models import Receipt

def generate_receipt(tenant, amount):
    receipt = Receipt.objects.create(tenant=tenant, amount=amount)
    # Logic to send receipt via email or in-app notification
    return receipt
# backend/apps/payments/urls.py
from django.urls import path
from .views import PaymentListCreateView, PaymentRetrieveUpdateDestroyView

urlpatterns = [
    path('', PaymentListCreateView.as_view(), name='payment-list-create'),
    path('<int:pk>/', PaymentRetrieveUpdateDestroyView.as_view(), name='payment-detail'),
]
from apps.payments.views import PaymentViewSet

router.register(r'payments', PaymentViewSet)
