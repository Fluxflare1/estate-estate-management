# backend/apps/users/urls.py
from django.urls import path
from .views import RegisterUserView, LoginUserView

urlpatterns = [
    path('register/', RegisterUserView.as_view(), name='register'),
    path('login/', LoginUserView.as_view(), name='login'),
]
from django.urls import include, path
from rest_framework.routers import DefaultRouter
from apps.users.views import UserViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from apps.users.views import UserViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
