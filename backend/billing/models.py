from django.db import models

class Tenant(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    balance = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)

    def __str__(self):
        return self.name

class EnergyPurchase(models.Model):
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateTimeField(auto_now_add=True)

class MeterReading(models.Model):
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE)
    reading = models.FloatField()
    date = models.DateTimeField(auto_now_add=True)
