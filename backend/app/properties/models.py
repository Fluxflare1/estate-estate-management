from django.db import models

class Property(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    property_type = models.CharField(max_length=100)  # e.g., apartment, house
    owner = models.ForeignKey('users.User', on_delete=models.CASCADE)

    def __str__(self):
        return self.title
