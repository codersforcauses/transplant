from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Registration, RegistrantDetail
from django.shortcuts import get_object_or_404

class RegistrationsByUserView(APIView):
    def get(self, request):
        user_id = request.query_params.get('user_id')
        if not user_id:
            return Response({'detail': 'user_id is required as a query parameter.'}, status=status.HTTP_400_BAD_REQUEST)
        # Get all registrations for this user, exclude where registrant is the user themselves
        registrations = Registration.objects.filter(user_id=user_id).select_related('registrant_details')  # type: ignore[attr-defined]
        data = []
        for reg in registrations:
            registrant = getattr(reg, 'registrant_details', None)
            if registrant and not registrant.is_user:
                data.append({
                    'registration_id': str(reg.id),
                    'first_name': registrant.first_name,
                    'last_name': registrant.last_name,
                    'status': reg.status,
                    'created_at': reg.created_at,
                })
        return Response(data)
