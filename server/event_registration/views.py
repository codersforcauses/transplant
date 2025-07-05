from .forms import UserRegistrationForm
from django.http import HttpResponse


def register_user(request):
    form = UserRegistrationForm(request.POST)

    if not form.is_valid():
        return HttpResponse(status=400)

    # Email collisions will cause a 400 error, not a 409
    form.save()
    return HttpResponse(status=200)
