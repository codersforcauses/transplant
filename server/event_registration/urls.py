from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from event_registration import views
from .views import RegistrantDetailRetrieveUpdate, register_user


urlpatterns = [
    path("users/register/", register_user, name="register_user"),
    path("token/", TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path("token/refresh/", TokenRefreshView.as_view(), name='token_refresh'),
    path('registrations/', views.RegistrationListCreate.as_view(), name='registration-list-create'),
    path('registrant-details/<uuid:pl>/', RegistrantDetailRetrieveUpdate.as_view(), name='registrant-detail-retrieve-update'),
]
