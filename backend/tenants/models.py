from django.db import models
from django.contrib.auth.models import User
from properties.models import Property  # Assuming you have a Property model

class Tenant(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    property = models.ForeignKey(Property, on_delete=models.CASCADE)
    status = models.CharField(max_length=20, choices=[('pending', 'Pending'), ('approved', 'Approved'), ('rejected', 'Rejected')], default='pending')
    application_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.property.title} - {self.status}"
