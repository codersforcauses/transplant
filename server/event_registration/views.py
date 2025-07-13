from rest_framework import permissions, generics
from .models import Registration, RegistrantDetail
from .serializers import RegistrationSerializer, RegistrantDetailSerializer


class Registration(generics.ListCreateAPIView):
    queryset = Registration.objects.all()
    serializer_class = RegistrationSerializer
    permission_classes = [permissions.IsAuthenticated]


class RegistrantDetail(generics.RetrieveUpdateAPIView):
    queryset = RegistrantDetail.objects.all()
    serializer_class = RegistrantDetailSerializer
    permission_classes = [permissions.IsAuthenticated]
