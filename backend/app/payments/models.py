from django.db import models

class Payment(models.Model):
    user = models.ForeignKey('users.User', on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=50)  # e.g., completed, pending

    def __str__(self):
        return f"{self.user.username} - {self.amount}"
