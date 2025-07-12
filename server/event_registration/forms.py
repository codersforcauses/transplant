from django.contrib.auth.forms import UserCreationForm
from django.forms.fields import EmailField, CharField
from django.contrib.auth import get_user_model

User = get_user_model()


class UserRegistrationForm(UserCreationForm):
    class Meta:
        model = User
        fields = ("email", "first_name", "last_name")
        field_classes = {
            "email": EmailField,
            "first_name": CharField,
            "last_name": CharField
        }

    def clean(self):
        fields = super().clean()
        if "email" in fields:
            fields["email"] = self._meta.model.objects.normalize_email(fields["email"])
        return fields
