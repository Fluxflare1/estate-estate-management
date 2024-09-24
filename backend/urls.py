from django.urls import path, include

urlpatterns = [
    path('tenants/', include('tenants.urls')),
    # Include other URL patterns
]
