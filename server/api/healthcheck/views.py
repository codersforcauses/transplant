from rest_framework.decorators import api_view, authentication_classes, permission_classes

from django.http import HttpResponse


# Create your views here.
@api_view(["GET"])
@authentication_classes([])
@permission_classes([])
def ping(request):
    return HttpResponse("Pong!", status=200)
