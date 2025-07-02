from rest_framework.serializers import ModelSerializer
from django.contrib.auth import get_user_model

UserModel = get_user_model()


class UserSerializer(ModelSerializer):

    class Meta:
        model = UserModel
        fields = ["email", "password"]
        extra_kwargs = {
            "password": {"write_only": True}
        }
