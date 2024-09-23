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
