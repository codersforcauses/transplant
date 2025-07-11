from django.contrib.auth.backends import ModelBackend
from django.contrib.auth import get_user_model

class EmailBackend(ModelBackend):
    def authenticate(self, request, username=None, email=None, password=None, **kwargs):
        UserModel = get_user_model()
        if email is None:
            email = username
        try:
            user = UserModel.objects.get(email=email)
        except UserModel.DoesNotExist:
            return None
        if user.check_password(password) and self.user_can_authenticate(user):
            return user
        return None 