from django.core.mail import send_mail
from .models import Notification

def send_notification_email(user_email, subject, message):
    send_mail(
        subject,
        message,
        'noreply@yourapp.com',
        [user_email],
        fail_silently=False,
    )
