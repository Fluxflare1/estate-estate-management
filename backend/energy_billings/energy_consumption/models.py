# backend/energy-billings/energy_consumption/models.py
from django.contrib.auth.models import User
from django.db import models

class EnergyBillingAccount(models.Model):
    landlord = models.ForeignKey(User, on_delete=models.CASCADE)
    biller = models.OneToOneField(User, related_name='biller_account', on_delete=models.CASCADE)
    # Additional fields for account information
    energy_purchased = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    current_reading = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    previous_reading = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)

    def __str__(self):
        return f"{self.landlord}'s Billing Account"
from django.db import models

class EnergyBillingAccount(models.Model):
    landlord = models.ForeignKey('users.User', on_delete=models.CASCADE)  # Assuming you have a User model
    biller = models.ForeignKey('users.User', on_delete=models.SET_NULL, null=True, related_name='biller_accounts')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'Billing Account for {self.landlord}'

class MeterReading(models.Model):
    billing_account = models.ForeignKey(EnergyBillingAccount, on_delete=models.CASCADE, related_name='meter_readings')
    tenant = models.ForeignKey('users.Tenant', on_delete=models.CASCADE)  # Assuming you have a Tenant model
    previous_reading = models.FloatField()
    current_reading = models.FloatField()
    reading_date = models.DateTimeField(auto_now_add=True)

    def energy_consumed(self):
        return self.current_reading - self.previous_reading

class EnergyPurchase(models.Model):
    billing_account = models.ForeignKey(EnergyBillingAccount, on_delete=models.CASCADE, related_name='energy_purchases')
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    purchase_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Energy Purchase of {self.total_amount} for {self.billing_account}'
