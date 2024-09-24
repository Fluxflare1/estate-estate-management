from celery import shared_task
from .models import create_notification
from .tasks import send_notification_email
from django.contrib.auth.models import User

@shared_task
def notify_user(user_id, message, email_subject=None):
    user = User.objects.get(id=user_id)
    
    # Create In-App Notification
    create_notification(user, message)

    # Send Email Notification
    if email_subject:
        send_notification_email(user.email, email_subject, message)
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
