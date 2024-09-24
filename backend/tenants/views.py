from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Tenant
from .serializers import TenantSerializer

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def apply_tenant(request, property_id):
    if request.method == 'POST':
        tenant_data = {
            'user': request.user.id,
            'property_id': property_id,
        }
        serializer = TenantSerializer(data=tenant_data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def approve_tenant(request, tenant_id):
    try:
        tenant = Tenant.objects.get(id=tenant_id)
        tenant.status = 'approved'
        tenant.save()
        return Response({'message': 'Tenant approved successfully'}, status=200)
    except Tenant.DoesNotExist:
        return Response({'error': 'Tenant not found'}, status=404)

@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def reject_tenant(request, tenant_id):
    try:
        tenant = Tenant.objects.get(id=tenant_id)
        tenant.status = 'rejected'
        tenant.save()
        return Response({'message': 'Tenant rejected successfully'}, status=200)
    except Tenant.DoesNotExist:
        return Response({'error': 'Tenant not found'}, status=404)
