class EnergyBillingAccount(models.Model):
    # Existing fields...

    def calculate_final_amount(self, tenant_id, current_cost):
        """
        Calculate the final amount for a tenant, including any outstanding balance.
        
        Args:
            tenant_id (int): The tenant's ID.
            current_cost (float): Current amount owed by the tenant.
        
        Returns:
            float: The final amount due for the tenant.
        """
        outstanding_balance = self.update_balance(tenant_id, current_cost)
        final_amount = current_cost + outstanding_balance
        
        return final_amount
class TenantPayment(models.Model):
    # Existing fields...
    
    def update_balance(self, tenant_id, current_cost):
        """
        Update the balance for a tenant based on their current cost and payments.
        
        Args:
            tenant_id (int): The tenant's ID.
            current_cost (float): Current amount owed by the tenant.
        """
        tenant_payments = TenantPayment.objects.filter(tenant_id=tenant_id)
        total_paid = sum(payment.amount for payment in tenant_payments)
        outstanding_balance = current_cost - total_paid
        
        return outstanding_balance
class EnergyBillingAccount(models.Model):
    # Existing fields...

    def distribute_cost(self, total_energy_purchased, tenant_consumptions):
        """
        Distribute cost based on consumption.
        
        Args:
            total_energy_purchased (float): Total amount of energy purchased.
            tenant_consumptions (dict): Dictionary of tenant ids and their corresponding consumption.
        
        Returns:
            dict: A dictionary with tenant ids and their respective costs.
        """
        total_units_consumed = sum(tenant_consumptions.values())
        cost_distribution = {}
        
        if total_units_consumed > 0:
            cost_per_unit = total_energy_purchased / total_units_consumed
            for tenant_id, consumption in tenant_consumptions.items():
                cost_distribution[tenant_id] = consumption * cost_per_unit
                
        return cost_distribution
# backend/energy-billings/energy_consumption/models.py

class EnergyBillingAccount(models.Model):
    # Existing fields...
    
    def calculate_consumption(self, tenant_meter_readings):
        """
        Calculate total consumption for the billing period.
        
        Args:
            tenant_meter_readings (dict): A dictionary containing tenant ids as keys 
                                           and their respective meter readings as values.
        
        Returns:
            dict: A dictionary with tenant ids and their corresponding consumption.
        """
        consumption = {}
        for tenant_id, readings in tenant_meter_readings.items():
            # Assuming readings is a tuple (previous_reading, current_reading)
            previous_reading, current_reading = readings
            consumption[tenant_id] = current_reading - previous_reading
            
        return consumption
from django.db import models

class EnergyBillingAccount(models.Model):
    # Existing fields...
    landlord = models.ForeignKey('User', on_delete=models.CASCADE)
    total_energy_purchased = models.DecimalField(max_digits=10, decimal_places=2)
    # Other fields...

class Payment(models.Model):
    billing_account = models.ForeignKey(EnergyBillingAccount, related_name='payments', on_delete=models.CASCADE)
    tenant = models.ForeignKey('User', on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_date = models.DateTimeField(auto_now_add=True)
    payment_type = models.CharField(max_length=20, choices=[('partial', 'Partial'), ('full', 'Full'), ('advance', 'Advance'), ('none', 'No Payment')])
    
    def __str__(self):
        return f"{self.tenant.username} - {self.amount} on {self.payment_date}"
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
