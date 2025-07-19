from .forms import UserRegistrationForm
from django.http import HttpResponse
from rest_framework.decorators import api_view, authentication_classes, permission_classes
import json
from rest_framework import permissions, generics
from .models import Registration, RegistrantDetail
from .serializers import RegistrationSerializer, RegistrantDetailSerializer


@api_view(["POST"])
@authentication_classes([])
@permission_classes([])
def register_user(request):
    try:
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        form = UserRegistrationForm(body)
        errors = form.errors.as_data()
    except json.decoder.JSONDecodeError:
        return HttpResponse(status=400)

    if errors.keys() == set(["email"]) and errors["email"][0].code == "unique":
        return HttpResponse(status=409)

    if not form.is_valid():
        return HttpResponse(status=400)

    # Email collisions will cause a 400 error, not a 409
    form.save()
    return HttpResponse(status=200)


class RegistrationListCreate(generics.ListCreateAPIView):
    serializer_class = RegistrationSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        """Only return registrations for the current user"""
        return Registration.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        """Automatically set the user to the current user when creating"""
        serializer.save(user=self.request.user)


class RegistrantDetailRetrieveUpdate(generics.RetrieveUpdateAPIView):
    queryset = RegistrantDetail.objects.all()
    serializer_class = RegistrantDetailSerializer
    permission_classes = [permissions.IsAuthenticated]
