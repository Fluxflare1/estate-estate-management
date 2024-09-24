from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TenantViewSet, EnergyPurchaseViewSet, MeterReadingViewSet, chat

router = DefaultRouter()
router.register(r'tenants', TenantViewSet)
router.register(r'energy-purchases', EnergyPurchaseViewSet)
router.register(r'meter-readings', MeterReadingViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('chat/', chat, name='chat'),  # Chat API endpoint
]
