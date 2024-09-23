from apps.payments.views import PaymentViewSet

router.register(r'payments', PaymentViewSet)
from apps.properties.views import PropertyViewSet

router.register(r'properties', PropertyViewSet)
