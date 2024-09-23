from celery.schedules import crontab

CELERY_BEAT_SCHEDULE = {
    'send-reminders-every-day': {
        'task': 'payments.tasks.send_payment_reminders',
        'schedule': crontab(hour=9, minute=0),  # Set to run every day at 9 AM
    },
}
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'estate_management',
        'USER': 'your_db_user',
        'PASSWORD': 'your_db_password',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
}
