from celery import shared_task
from .models import Payment
from datetime import datetime, timedelta

@shared_task
def send_payment_reminders():
    # Logic to find upcoming payments and send reminders
    upcoming_payments = Payment.objects.filter(due_date__lte=datetime.now() + timedelta(days=3))
    for payment in upcoming_payments:
        # Logic to send reminder (e.g., via email or notification)
        pass
from celery import shared_task
from django.core.mail import send_mail  # Import email functionality
from .models import Tenant  # Adjust the import based on your models

@shared_task
def send_payment_reminders():
    tenants = Tenant.objects.all()  # Retrieve all tenants
    for tenant in tenants:
        # Logic for sending reminders
        send_mail(
            'Payment Reminder',
            'This is a reminder to make your payment.',
            'from@example.com',  # Replace with your email
            [tenant.email],  # Tenant's email
        )
