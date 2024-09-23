# estate_management/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from apps.users.views import UserViewSet
from apps.properties.views import PropertyViewSet
from apps.payments.views import PaymentViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'properties', PropertyViewSet)
router.register(r'payments', PaymentViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
# backend/estate_management/urls.py

from apps.payments.views import CashTransactionViewSet

router.register(r'cash-transactions', CashTransactionViewSet)
router.register(r'messages', MessageViewSet)
from django.urls import include, path
from rest_framework.routers import DefaultRouter
from apps.notifications.views import NotificationViewSet

router = DefaultRouter()
router.register(r'notifications', NotificationViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
# backend/estate_management/urls.py
from django.urls import include

urlpatterns = [
    path('api/properties/', include('apps.properties.urls')),
    path('api/payments/', include('apps.payments.urls')),  # Add payments URLs
]
# backend/estate_management/urls.py
from django.urls import include

urlpatterns = [
    path('api/properties/', include('apps.properties.urls')),  # Add properties URLs
]
# backend/estate_management/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/users/', include('apps.users.urls')),  # Adding the users URLs
]
from django.urls import path, include
from apps.users.views import RegisterUser
from apps.properties.views import PropertyListCreateView
from apps.payments.views import PaymentCreateView

urlpatterns = [
    path('users/register/', RegisterUser.as_view()),
    path('properties/', PropertyListCreateView.as_view()),
    path('payments/', PaymentCreateView.as_view()),
]
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns += [
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
from apps.payments.views import PaymentViewSet

router.register(r'payments', PaymentViewSet)
from apps.properties.views import PropertyViewSet

router.register(r'properties', PropertyViewSet)
