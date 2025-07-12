from rest_framework import serializers
from .models import Registration, RegistrantDetail


class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Registration
        fields = '__all__'
        read_only_fields = ['id', 'created_at', 'updated_at', 'last_saved_at']


class RegistrantDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegistrantDetail
        fields = "__all__"
        read_only_fields = ['created_at', 'updated_at']
