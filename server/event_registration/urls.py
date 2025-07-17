from django.urls import path
from .views import RegistrationsByUserView

urlpatterns = [
    path('registrations/', RegistrationsByUserView.as_view(), name='registrations-by-user'),
]