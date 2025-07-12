from django.urls import path
from .views import (
    RegistrantDetailListCreateView,
    RegistrantDetailDetailView,
)


urlpatterns = [
    path('registrant-details/', RegistrantDetailListCreateView.as_view(), name='registrant-details-list-create'),
    path('registrant-details/<int:pk>/', RegistrantDetailDetailView.as_view(), name='registrant-detail-detail'),
]
