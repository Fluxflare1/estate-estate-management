from django.test import TestCase
from .models import User

class UserModelTest(TestCase):
    def setUp(self):
        User.objects.create(username='testuser', email='testuser@example.com')

    def test_user_creation(self):
        user = User.objects.get(username='testuser')
        self.assertEqual(user.email, 'testuser@example.com')
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import User  # Adjust as needed

class UserTests(APITestCase):
    def test_create_user(self):
        url = reverse('user-list')  # Ensure this matches your URL name
        data = {
            'username': 'testuser',
            'email': 'test@example.com',
            'password': 'testpass123'
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(User.objects.count(), 1)
        self.assertEqual(User.objects.get().username, 'testuser')
