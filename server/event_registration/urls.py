from django.urls import path
from event_registration import views
from .views import RegistrantDetailRetrieveUpdate, register_user
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path("users/register/", register_user, name="register_user"),
    path("token/", TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path("token/refresh/", TokenRefreshView.as_view(), name='token_refresh'),
    path('event_registration/registrations/', views.RegistrationListCreate.as_view(), name='registration-list-create'),
    path('event_registration/registrant-details/<int:pk>/', RegistrantDetailRetrieveUpdate.as_view(), name='registrant-detail-retrieve-update'),
]
