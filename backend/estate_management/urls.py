from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns += [
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
from apps.payments.views import PaymentViewSet

router.register(r'payments', PaymentViewSet)
from apps.properties.views import PropertyViewSet

router.register(r'properties', PropertyViewSet)
