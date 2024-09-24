# In backend/urls.py
from django.urls import path
from .views import RegisterView, LoginView

urlpatterns = [
    path('api/register/', RegisterView.as_view(), name='register'),
    path('api/login/', LoginView.as_view(), name='login'),
]
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/energy-billings/', include('energy_billings.energy_consumption.urls')),  # Include the energy billing URLs
]
from django.urls import path, include

urlpatterns = [
    path('tenants/', include('tenants.urls')),
    # Include other URL patterns
]
