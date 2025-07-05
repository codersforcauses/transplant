from django.test import TestCase
from django.contrib.auth import get_user_model
from django.urls import reverse

User = get_user_model()


class UserRegistrationTest(TestCase):
    def setUp(self):
        self.existing_user = User.objects.create_user(
            email="test@example.com",
            password="Is this a good password?"
        )
        self.url = reverse("register_user")

    def test_valid_registration(self):
        data = {
            "email": "test2@example.com",
            "password": "This is a good password!"
        }

        response = self.client.post(self.url, data)
        self.assertEqual(response.status_code, 200)
        try:
            new_user = User.objects.get(email="test2@example.com")
        except User.DoesNotExist:
            self.fail("New user was not created.")
        self.assertEqual(new_user.email, data["email"])
        self.assertTrue(new_user.check_password(data["password"]))

    def test_empty_form(self):
        response = self.client.post(self.url)
        self.assertEqual(response.status_code, 400)

    def test_email_collision(self):
        data = {
            "email": "test@example.com",
            "password": "Another decent password..."
        }
        response = self.client.post(self.url, data)
        self.assertEqual(response.status_code, 400)
