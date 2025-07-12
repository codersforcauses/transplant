from rest_framework import viewsets, permissions, generics
from .models import Registration, RegistrantDetail
from .serializers import RegistrationSerializer, RegistrantDetailSerializer


class RegistrationDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Registration.objects.all()
    serializer_class = RegistrationSerializer
    permission_classes = [permissions.IsAuthenticated]


class RegistrantDetailListCreateView(generics.ListCreateAPIView):
    queryset = RegistrantDetail.objects.all()
    serializer_class = RegistrantDetailSerializer
    permission_classes = [permissions.IsAuthenticated]


class RegistrantDetailDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = RegistrantDetail.objects.all()
    serializer_class = RegistrantDetailSerializer
    permission_classes = [permissions.IsAuthenticated]


# ViewSets (alternative approach)
class RegistrationViewSet(viewsets.ModelViewSet):
    queryset = Registration.objects.all()
    serializer_class = RegistrationSerializer
    permission_classes = [permissions.IsAuthenticated]


class RegistrantDetailViewSet(viewsets.ModelViewSet):
    queryset = RegistrantDetail.objects.all()
    serializer_class = RegistrantDetailSerializer
    permission_classes = [permissions.IsAuthenticated]
