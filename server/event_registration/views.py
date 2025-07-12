from .forms import UserRegistrationForm
from django.http import HttpResponse


def register_user(request):
    form = UserRegistrationForm(request.POST)

    if form.errors.keys() == "email":
        return HttpResponse(status=409)

    if not form.is_valid():
        print(form.errors)
        return HttpResponse(status=400)

    # Email collisions will cause a 400 error, not a 409
    form.save()
    return HttpResponse(status=200)
