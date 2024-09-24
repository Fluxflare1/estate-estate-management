from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Property, Tenant

@receiver(post_save, sender=Property)
def notify_tenant_of_price_change(sender, instance, **kwargs):
    tenants = instance.tenants.filter(is_approved=True)
    for tenant in tenants:
        # Send a notification or email to the tenant for approval
        pass
# backend/tasks.py
from .notifications.utils import create_notification

@shared_task
def send_payment_reminders():
    tenants = User.objects.filter(groups__name='Tenants')
    for tenant in tenants:
        # Logic for sending reminders
        message = "Reminder: Your payment is due soon!"
        create_notification(tenant, message)
        # (Optionally) Send an email to tenant with the reminder
