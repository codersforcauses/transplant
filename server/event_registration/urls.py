from django.urls import path
from .views import create_user, register_user, user_me

urlpatterns = [
    path('create/', create_user, name='create_user'),
    path('register/', register_user, name='register_user'),
    path('me/', user_me, name='user_me'),
] 