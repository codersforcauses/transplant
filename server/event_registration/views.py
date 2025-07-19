from .forms import UserRegistrationForm
from django.http import HttpResponse
from rest_framework.decorators import api_view, authentication_classes, permission_classes
import json

@api_view(["POST"])
@authentication_classes([])
@permission_classes([])
def register_user(request):
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)
    form = UserRegistrationForm(body)
    errors = form.errors.as_data()
    print(errors)

    if errors.keys() == set(["email"]) and errors["email"][0].code == "unique":
        return HttpResponse(status=409)

    if not form.is_valid():
        return HttpResponse(status=400)

    # Email collisions will cause a 400 error, not a 409
    form.save()
    return HttpResponse(status=200)
