from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
import uuid


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
        return self.create_user(email, password, **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):

    email = models.EmailField(unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)  # Controls admin site access
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    first_name = models.CharField(max_length=100, blank=True)
    middle_name = models.CharField(max_length=100, blank=True)
    last_name = models.CharField(max_length=100, blank=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = UserManager()

    def __str__(self):
        return self.email


class Registration(models.Model):
    STATUS_CHOICES = [
        ('draft', 'Draft'),
        ('submitted', 'Submitted'),
        ('paid', 'Paid'),
    ]

    AGE_GROUPS = [
        ('under_18', 'Under 18'),
        ('18_25', '18-25'),
        ('26_35', '26-35'),
        ('36_50', '36-50'),
        ('over_50', 'Over 50'),
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='registrations')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='draft')

    registration_category = models.CharField(max_length=50, blank=True)
    age_group = models.CharField(max_length=20, choices=AGE_GROUPS, blank=True)
    tshirt_size = models.CharField(max_length=20, blank=True)
    current_step = models.IntegerField(default=1)
    withdrawn_at = models.DateTimeField(null=True, blank=True)
    withdrawn_reason = models.TextField(blank=True)
    total_fees = models.IntegerField(null=True, blank=True)

    last_saved_at = models.DateTimeField(default=timezone.now)
    submitted_at = models.DateTimeField(null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Registration {self.id} ({self.status})"


class RegistrantDetail(models.Model):
    registration = models.OneToOneField(Registration, on_delete=models.CASCADE, related_name='registrant_details')
    is_user = models.BooleanField(default=False)

    # Peronsal data
    first_name = models.CharField(max_length=100, blank=True)
    middle_name = models.CharField(max_length=100, blank=True)
    last_name = models.CharField(max_length=100, blank=True)

    class Gender(models.TextChoices):
        MALE = 'M', _("Male")
        FEMALE = 'F', _('Female')
        OTHER = 'O', _('Other')
    gender = models.CharField(max_length=1, choices=Gender.choices, blank=True, default='O')
    date_of_birth = models.DateField(blank=True, null=True)
    email = models.EmailField(blank=True)

    # Address
    address_line1 = models.CharField(max_length=100, blank=True)
    address_line2 = models.CharField(max_length=100, blank=True)
    state = models.CharField(max_length=50, blank=True)
    postcode = models.CharField(max_length=10, blank=True)
    country = models.CharField(max_length=100, blank=True)

    # Travel
    has_travel_insurance = models.BooleanField(blank=True, default=False)
    repatriation_details = models.TextField(blank=True)

    # Phone
    day_phone = models.CharField(max_length=20, blank=True)
    cell_phone = models.CharField(max_length=20, blank=True)

    # Identity
    class Heritage(models.TextChoices):
        ABORIGINAL = 'A', _('Aboriginal')
        TORRES_STRAIT = 'T', _('Torres Strait Islander')
        BOTH = 'B', _('Aboriginal and Torres Strait Islander')
        NEITHER = 'N', _('Neither')
    aboriginal_torres_strait_islander = models.CharField(max_length=1, choices=Heritage.choices, blank=True)
    country_of_birth = models.CharField(max_length=50, blank=True)
    country_of_birth_other = models.CharField(max_length=50, blank=True)
    speaks_english = models.BooleanField(blank=True, default=False)
    other_language = models.CharField(max_length=50, blank=True)

    # Emergency
    emergency_contact_name = models.CharField(max_length=100, blank=True)
    emergency_contact_phone = models.CharField(max_length=100, blank=True)
    secondary_emergency_contact_name = models.CharField(max_length=100, blank=True)
    secondary_emergency_contact_phone = models.CharField(max_length=100, blank=True)

    # Competition
    representing_state = models.CharField(max_length=50, blank=True)
    representing_country = models.CharField(max_length=100, blank=True)
    supporter_info = models.CharField(max_length=100, blank=True)

    # Medical
    transplant_types = models.CharField(max_length=100, blank=True)
    other_transplant_type = models.CharField(max_length=100, blank=True)
    awaiting_transplant_type = models.CharField(max_length=100, blank=True)
    transplant_date = models.DateField(blank=True, null=True)
    ongoing_care_hospital = models.CharField(max_length=100, blank=True)
    has_pre_existing_conditions = models.BooleanField(blank=True, default=False)
    pre_existing_conditions_details = models.TextField(blank=True)
    requires_wheelchair_assistance = models.BooleanField(blank=True, default=False)
    has_dietary_requirements = models.BooleanField(blank=True, default=False)
    dietary_requirements_details = models.TextField(blank=True)

    # Preferences
    wants_to_volunteer = models.BooleanField(blank=True, default=False)
    wants_junior_activities_info = models.BooleanField(blank=True, default=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Registrant Detail #{self.id}"
