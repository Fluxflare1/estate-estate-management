from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EnergyBillingAccountViewSet, MeterReadingViewSet, EnergyPurchaseViewSet

router = DefaultRouter()
router.register(r'billing-accounts', EnergyBillingAccountViewSet)
router.register(r'meter-readings', MeterReadingViewSet)
router.register(r'energy-purchases', EnergyPurchaseViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
