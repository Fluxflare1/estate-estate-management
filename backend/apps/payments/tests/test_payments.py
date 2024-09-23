from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Payment  # Adjust as needed

class PaymentTests(APITestCase):
    def test_create_payment(self):
        url = reverse('payment-list')  # Ensure this matches your URL name
        data = {
            'amount': 100,
            'method': 'credit_card',
            'status': 'completed'
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Payment.objects.count(), 1)
        self.assertEqual(Payment.objects.get().amount, 100)
