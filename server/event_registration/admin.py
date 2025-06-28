#from unfold.admin import ModelAdmin, StackedInline
from .models import User, Participant
from django.contrib import admin

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    fields = ""

    
@admin.register(Participant)
class ParticipantAdmin(ModelAdmin, ImportExportMopdelAdmin):
    