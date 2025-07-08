# from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import json
import os

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
