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
