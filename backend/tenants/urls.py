from django.urls import path
from .views import apply_tenant, approve_tenant, reject_tenant

urlpatterns = [
    path('apply/<int:property_id>/', apply_tenant, name='apply_tenant'),
    path('approve/<int:tenant_id>/', approve_tenant, name='approve_tenant'),
    path('reject/<int:tenant_id>/', reject_tenant, name='reject_tenant'),
]
