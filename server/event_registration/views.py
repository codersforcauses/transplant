# from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import json
import os
from .serializers import UserRegistrationSerializer
from .models import User
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import permission_classes
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers

MOCK_DB_PATH = os.path.join(os.path.dirname(__file__), 'mock_users.json')

def load_users():
    if not os.path.exists(MOCK_DB_PATH):
        return []
    with open(MOCK_DB_PATH, 'r') as f:
        try:
            return json.load(f)
        except json.JSONDecodeError:
            return []

def save_users(users):
    with open(MOCK_DB_PATH, 'w') as f:
        json.dump(users, f)

@api_view(["POST"])
def create_user(request):
    data = request.data
    name = data.get('name')
    password = data.get('password')
    if not name or not password:
        return Response({'error': 'Name and password are required.'}, status=status.HTTP_400_BAD_REQUEST)
    user = {
        'name': name,
        'password': password,  # In production, never store plain passwords!
        'role': 'client',
    }
    users = load_users()
    users.append(user)
    save_users(users)
    return Response({'message': 'User created successfully.', 'user': user}, status=status.HTTP_201_CREATED)

@api_view(["POST"])
@permission_classes([AllowAny])
def register_user(request):
    serializer = UserRegistrationSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        # Ensure user is a single object, not a list
        if isinstance(user, list):
            user = user[0]
        return Response({
            "message": "User registered successfully.",
            "user": {"email": getattr(user, 'email', None), "role": getattr(user, 'role', None)}
        }, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class EmailTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom claims if needed
        return token

    def validate(self, attrs):
        # Accept 'email' instead of 'username'
        email = attrs.get('email') or attrs.get('username')
        password = attrs.get('password')
        if email is None or password is None:
            raise serializers.ValidationError('Email and password are required')
        # Try to get user by email
        from django.contrib.auth import authenticate
        user = authenticate(request=self.context.get('request'), email=email, password=password)
        if user is None:
            raise serializers.ValidationError('No active account found with the given credentials')
        # Pass 'email' as the username field, since USERNAME_FIELD is 'email'
        data = super().validate({'email': user.email, 'password': password})
        return data

class EmailTokenObtainPairView(TokenObtainPairView):
    serializer_class = EmailTokenObtainPairSerializer

class UserMeSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("email", "role")

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def user_me(request):
    serializer = UserMeSerializer(request.user)
    return Response(serializer.data)
