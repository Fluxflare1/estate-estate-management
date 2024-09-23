from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    email = models.EmailField(unique=True)
    is_property_owner = models.BooleanField(default=False)
    is_tenant = models.BooleanField(default=False)
    is_agent = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)
from django.db import models

class User(models.Model):
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)
    user_type = models.CharField(max_length=50)  # e.g., tenant, landlord, agent

    def __str__(self):
        return self.username
