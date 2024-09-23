# backend/apps/payments/urls.py
from django.urls import path
from .views import PaymentListCreateView, PaymentRetrieveUpdateDestroyView

urlpatterns = [
    path('', PaymentListCreateView.as_view(), name='payment-list-create'),
    path('<int:pk>/', PaymentRetrieveUpdateDestroyView.as_view(), name='payment-detail'),
]
from apps.payments.views import PaymentViewSet

router.register(r'payments', PaymentViewSet)
