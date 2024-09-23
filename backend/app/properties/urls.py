# backend/apps/properties/urls.py
from django.urls import path
from .views import PropertyListCreateView, PropertyRetrieveUpdateDestroyView

urlpatterns = [
    path('', PropertyListCreateView.as_view(), name='property-list-create'),
    path('<int:pk>/', PropertyRetrieveUpdateDestroyView.as_view(), name='property-detail'),
]
from apps.properties.views import PropertyViewSet

router.register(r'properties', PropertyViewSet)
