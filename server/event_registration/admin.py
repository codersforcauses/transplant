# from django.forms import ModelAdmin
from .models import User, Participant
from django.contrib import admin


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    fields = ("email", "password", "is_admin", "created_at", "updatedx_at", "last_login")

    
@admin.register(Participant)
class ParticipantAdmin(admin.ModelAdmin):
    fields = ("email", "password", "is_admin", "created_at", "updatedx_at", "last_login")
