from .forms import UserRegistrationForm
from django.http import HttpResponse


def register_user(request):
    form = UserRegistrationForm(request.POST)
    errors = form.errors.as_data()

    if errors.keys() == set(["email"]) and errors["email"][0].code == "unique":
        return HttpResponse(status=409)

    if not form.is_valid():
        return HttpResponse(status=400)

    # Email collisions will cause a 400 error, not a 409
    form.save()
    return HttpResponse(status=200)
