from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import register_user, RegistrationsByUserView


urlpatterns = [
    path("users/register/", register_user, name="register_user"),
    path("token/", TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path("token/refresh/", TokenRefreshView.as_view(), name='token_refresh'),
    path('registrations/', RegistrationsByUserView.as_view(),
         name='registrations-by-user'),
]
