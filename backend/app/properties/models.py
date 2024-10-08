from django.db import models
from apps.users.models import User  # Assuming users is another app

class Property(models.Model):
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    landlord = models.ForeignKey(User, on_delete=models.CASCADE, related_name='owned_properties')
    tenant = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='rented_properties')
    rent = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
# backend/apps/properties/models.py
from django.db import models
from django.conf import settings

class Property(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    location = models.CharField(max_length=255)
    rent = models.DecimalField(max_digits=10, decimal_places=2)
    landlord = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return self.title
from django.db import models

class Property(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    property_type = models.CharField(max_length=100)  # e.g., apartment, house
    location = models.CharField(max_length=255)
    landlord = models.ForeignKey('users.User', on_delete=models.CASCADE)  # Assuming a User model exists
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
# backend/apps/properties/models.py
from django.db import models

class Property(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    address = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
from django.db import models
from apps.users.models import User

class Property(models.Model):
    owner = models.ForeignKey(User, related_name="properties", on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=500)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=50, choices=[('rent', 'Rent'), ('sale', 'Sale')])

    def __str__(self):
        return self.name
from django.db import models
from apps.users.models import User

class Property(models.Model):
    name = models.CharField(max_length=255)
    address = models.TextField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    is_rentable = models.BooleanField(default=True)
    is_saleable = models.BooleanField(default=False)
from django.db import models

class Property(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    property_type = models.CharField(max_length=100)  # e.g., apartment, house
    owner = models.ForeignKey('users.User', on_delete=models.CASCADE)

    def __str__(self):
        return self.title
