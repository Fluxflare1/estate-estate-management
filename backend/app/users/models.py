from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    is_business_account = models.BooleanField(default=False)
    # Additional fields as necessary

# Create a signal to automatically create or update UserProfile
from django.db.models.signals import post_save

def create_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)

post_save.connect(create_user_profile, sender=User)
class Tenant(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    property = models.ForeignKey(Property, on_delete=models.CASCADE, related_name='tenants')
    move_in_date = models.DateField()
    move_out_date = models.DateField(null=True, blank=True)
    is_approved = models.BooleanField(default=False)

    def __str__(self):
        return f'Tenant: {self.user.username} for Property: {self.property.address}'
class Property(models.Model):
    business_profile = models.ForeignKey(BusinessProfile, on_delete=models.CASCADE, related_name='properties')
    address = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.address} - {self.price}'
from django.db import models
from django.contrib.auth.models import User

class BusinessProfile(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    profile_type = models.CharField(max_length=50, choices=[('individual', 'Individual'), ('corporate', 'Corporate')])
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
from django.contrib.auth.models import User, Group

# Function to create and assign groups (roles)
def create_user_roles():
    # Create roles
    business_admin_group, created = Group.objects.get_or_create(name='BusinessAdmin')
    co_admin_group, created = Group.objects.get_or_create(name='CoAdmin')
    agent_group, created = Group.objects.get_or_create(name='Agent')
    # You can also add permissions specific to each role if needed
    # Example: Add 'change_property' permission to BusinessAdmin
    # from django.contrib.auth.models import Permission
    # change_property_permission = Permission.objects.get(codename='change_property')
  # business_admin_group.permissions.add(change_property_permission)
from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    profile_image = models.ImageField(upload_to='profile_images/', blank=True, null=True)

    def __str__(self):
        return self.username
# backend/apps/users/models.py
from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    phone_number = models.CharField(max_length=15, blank=True)
    address = models.TextField(blank=True)
# backend/apps/users/models.py
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models

class UserManager(BaseUserManager):
    def create_user(self, email, username, password=None):
        if not email:
            raise ValueError('Users must have an email address')
        if not username:
            raise ValueError('Users must have a username')
        
        user = self.model(email=self.normalize_email(email), username=username)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password=None):
        user = self.create_user(email, username, password)
        user.is_admin = True
        user.save(using=self._db)
        return user

class User(AbstractBaseUser):
    email = models.EmailField(verbose_name='email address', max_length=255, unique=True)
    username = models.CharField(max_length=50, unique=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.is_admin
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    is_property_owner = models.BooleanField(default=False)
    is_tenant = models.BooleanField(default=False)
    is_agent = models.BooleanField(default=False)
from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    email = models.EmailField(unique=True)
    is_property_owner = models.BooleanField(default=False)
    is_tenant = models.BooleanField(default=False)
    is_agent = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)
from django.db import models

class User(models.Model):
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)
    user_type = models.CharField(max_length=50)  # e.g., tenant, landlord, agent

    def __str__(self):
        return self.username
