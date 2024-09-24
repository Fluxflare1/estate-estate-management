# backend/energy-billings/energy_consumption/tests.py
from django.test import TestCase
from django.contrib.auth.models import User
from .models import EnergyBillingAccount

class EnergyBillingAccountTests(TestCase):
    def setUp(self):
        self.landlord = User.objects.create_user(username='landlord', password='testpass')
        self.biller = User.objects.create_user(username='biller', password='testpass')
        self.account = EnergyBillingAccount.objects.create(landlord=self.landlord, biller=self.biller)

    def test_create_billing_account(self):
        self.assertIsNotNone(self.account)
        self.assertEqual(self.account.landlord.username, 'landlord')
        self.assertEqual(self.account.biller.username, 'biller')
