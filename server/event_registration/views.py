from .forms import UserRegistrationForm
from django.http import HttpResponse
from rest_framework.decorators import api_view, authentication_classes, permission_classes
import json
from rest_framework.views import APIView
from .models import Registration
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated


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

    if errors.keys() == {"email"} and errors["email"][0].code == "unique":
        return HttpResponse(status=409)

    if not form.is_valid():
        return HttpResponse(status=400)

    # Email collisions will cause a 400 error, not a 409
    form.save()
    return HttpResponse(status=200)


class RegistrationsByUserView(APIView):
    permission_classes = [IsAuthenticated]

    # Define the fields we need to fetch from the database
    REGISTRATION_FIELDS = [
        'id',
        'status',
        'created_at',
        'registrant_details__first_name',
        'registrant_details__last_name'
    ]

    def get(self, request):
        user_id = request.query_params.get('user_id')
        if not user_id:
            return Response({'detail': 'user_id is required as a query parameter.'}, status=status.HTTP_400_BAD_REQUEST)
        if request.user.id != int(user_id):
            return Response({'detail': 'You are not allowed to access registrations for another user.'}, status=status.HTTP_403_FORBIDDEN)

        # Optimized query: fetch only needed fields and filter at database level
        registrations = Registration.objects.filter(
            user_id=user_id,
            registrant_details__is_user=False
        ).select_related('registrant_details').values(*self.REGISTRATION_FIELDS)

        # Build response data directly from values query
        data = [
            {
                'registration_id': str(reg['id']),
                'first_name': reg['registrant_details__first_name'],
                'last_name': reg['registrant_details__last_name'],
                'status': reg['status'],
                'created_at': reg['created_at'],
            }
            for reg in registrations
        ]

        return Response(data)
