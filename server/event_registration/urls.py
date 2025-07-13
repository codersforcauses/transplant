from django.urls import path
from event_registration import views
from .views import RegistrantDetail


urlpatterns = [
    path('registrations/', views.Registration.as_view(), name='registration-list-create'),
    path('registrant-details/', views.RegistrantDetail.as_view(), name='registrant-detail'),
    path('registrant-details/<int:pk>/', RegistrantDetail.as_view(), name='registrant-detail-detail'),
]
