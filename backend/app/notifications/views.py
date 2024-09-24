from django.http import JsonResponse
from .models import Notification

def get_notifications(request):
    user = request.user
    notifications = Notification.objects.filter(user=user, read=False)
    data = [{"message": n.message, "created_at": n.created_at} for n in notifications]
    
    return JsonResponse({"notifications": data})
from .tasks import notify_user

# Example of triggering a notification
def some_view(request):
    # Assuming you have a user and a message
    user = request.user
    message = "Your payment has been successfully processed."
    email_subject = "Payment Confirmation"
    
    # Trigger the notification
    notify_user.delay(user.id, message, email_subject)

    return HttpResponse("Notification sent!")
from rest_framework import viewsets
from .models import Notification
from .serializers import NotificationSerializer

class NotificationViewSet(viewsets.ModelViewSet):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer

    def get_queryset(self):
        user = self.request.user
        return self.queryset.filter(user=user)
