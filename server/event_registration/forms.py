from django.forms import ModelForm
from django.contrib.auth import get_user_model

User = get_user_model()


class UserRegistrationForm(ModelForm):
    class Meta:
        model = User
        fields = ["email", "password"]
