from .forms import UserRegistrationForm
from django.http import HttpResponse


def register_user(request):
    form = UserRegistrationForm(request.POST)

    if not form.is_valid():
        return HttpResponse(status=400)

    # check if duplicate emails produce an invalid form

    form.save()
    return HttpResponse(status=200)
