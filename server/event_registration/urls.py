from django.urls import path
from event_registration import views
from .views import RegistrantDetailRetrieveUpdate


urlpatterns = [
    path('event_registration/registrations/', views.RegistrationListCreate.as_view(), name='registration-list-create'),
    path('event_registration/registrant-details/<int:pk>/', RegistrantDetailRetrieveUpdate.as_view(), name='registrant-detail-retrieve-update'),
]
