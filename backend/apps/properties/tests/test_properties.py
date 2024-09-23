from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Property  # Adjust as needed

class PropertyTests(APITestCase):
    def test_create_property(self):
        url = reverse('property-list')  # Ensure this matches your URL name
        data = {
            'name': 'Test Property',
            'location': 'Test Location',
            'price': 1000
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Property.objects.count(), 1)
        self.assertEqual(Property.objects.get().name, 'Test Property')
