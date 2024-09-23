# backend/apps/payments/urls.py
from django.urls import path
from .views import generate_receipt

urlpatterns = [
    # Other payment URLs
    path('payments/<int:payment_id>/receipt/', generate_receipt, name='generate_receipt'),
]
from django.urls import path
from . import views

urlpatterns = [
    path('payments/', views.get_payments, name='get_payments'),
    path('payments/add/', views.add_payment, name='add_payment'),
    path('payments/update/<int:pk>/', views.update_payment, name='update_payment'),
]
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
