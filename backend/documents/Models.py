from django.db import models

class Document(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    tenant = models.ForeignKey('users.User', on_delete=models.CASCADE)
    landlord = models.ForeignKey('users.User', on_delete=models.CASCADE, related_name='landlord_documents')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
