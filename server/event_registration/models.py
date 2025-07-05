from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.utils import timezone
from django.utils.translation import gettext_lazy as _


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


# Placeholder for Registration model
class Registration(models.Model):
    def __str__(self):
        return f"Registration #{self.id}"


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
    gender = models.CharField(max_length=1, choices=Gender.choices, blank=True)
    date_of_birth = models.DateField(null=True)
    email = models.EmailField(blank=True)

    # Address
    address_line1 = models.CharField(max_length=100, blank=True)
    address_line2 = models.CharField(max_length=100, blank=True)
    state = models.CharField(max_length=50, blank=True)
    postcode = models.CharField(max_length=10, blank=True)
    country = models.CharField(max_length=100, blank=True)

    # Travel
    has_travel_insurance = models.BooleanField(blank=True)
    repatriation_details = models.TextField(blank=True)

    # Phone
    day_phone = models.CharField(max_length=20, blank=True)
    cell_phone = models.CharField(max_length=20, blank=True)

    # Identity
    class Heritage(models.TextChoices):
        ABORIGINAL = 'A', _('Aboriginal')
        TORRES_STRAIT = 'T', _('Torres Straint Islander')
        BOTH = 'B', _('Aboriginal and Torres Straint Islander')
        NONE = 'N', _('None')
    aboriginal_torres_strait_islander = models.CharField(max_length=50, choices=Heritage.choices, blank=True)
    country_of_birth = models.CharField(max_length=50, blank=True)
    country_of_birth_other = models.CharField(max_length=50, blank=True)
    speaks_english = models.BooleanField(null=True)
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
    transplant_date = models.DateField(null=True)
    ongoing_care_hospital = models.CharField(max_length=100, blank=True)
    has_pre_existing_conditions = models.BooleanField(null=True)
    pre_existing_conditions_details = models.TextField(blank=True)
    requires_wheelchair_assistance = models.BooleanField(blank=True)
    has_dietary_requirements = models.BooleanField(null=True)
    dietary_requirements_details = models.TextField(blank=True)

    # Preferences
    wants_to_volunteer = models.BooleanField(null=True)
    wants_junior_activities_info = models.BooleanField(null=True)

    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Registrant Detail #{self.id}"
