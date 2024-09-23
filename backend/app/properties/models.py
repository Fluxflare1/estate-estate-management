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
