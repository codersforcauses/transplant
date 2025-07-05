import uuid
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.utils import timezone


class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("The Email field must be set.")
        email = self.normalize_email(email)
        extra_fields.setdefault("is_active", True)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("role", "ADMIN")

        return self.create_user(email, password, **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    ROLE_CHOICES = (
        ("ADMIN", "Admin"),
        ("PARTICIPANT", "Participant"),
    )

    email = models.EmailField(unique=True)
    role = models.CharField(
        max_length=20,
        choices=ROLE_CHOICES,
        default="PARTICIPANT",
    )
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)  # Controls admin site access
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = UserManager()

    def __str__(self):
        return self.email


class Registration(models.Model):
    STATUS_CHOICES = (
        ('draft', 'Draft'),
        ('submitted', 'Submitted'),
        ('paid', 'Paid'),
    )
    
    REGISTRATION_CATEGORY_CHOICES = (
        ('participant', 'Participant'),
        ('supporter', 'Supporter'),
    )
    
    AGE_GROUP_CHOICES = (
        ('under_18', 'Under 18'),
        ('18_34', '18-34'),
        ('35_49', '35-49'),
        ('50_plus', '50+'),
    )
    
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='registrations'
    )
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='draft'
    )
    registration_category = models.CharField(
        max_length=20,
        choices=REGISTRATION_CATEGORY_CHOICES
    )
    age_group = models.CharField(
        max_length=20,
        choices=AGE_GROUP_CHOICES
    )
    tshirt_size = models.CharField(max_length=10, blank=True, default='')
    current_step = models.IntegerField(default=1)
    withdrawn_at = models.DateTimeField(blank=True, null=True)
    withdrawn_reason = models.TextField(blank=True, default='')
    total_fees = models.IntegerField(blank=True, null=True)
    last_saved_at = models.DateTimeField(default=timezone.now)
    submitted_at = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'registrations'
        ordering = ['-created_at']
    
    def __str__(self):
        return f"Registration {self.id} - {self.user.email} ({self.status})"
