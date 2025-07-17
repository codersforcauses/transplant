from django.test import TestCase
from django.contrib.auth import get_user_model
from django.urls import reverse

User = get_user_model()


class UserRegistrationTest(TestCase):
    def setUp(self):
        self.existing_user = User.objects.create_user(
            email="existing@example.com",
            password="Is this a good password?"
        )
        self.url = reverse("register_user")

    def check_data(
        self,
        email="new@example.com",
        password1="Another decent password...",
        password2="Another decent password...",
        first_name="Jane",
        last_name="Doe",
        expected_status=400
    ):
        data = {
            "email": email,
            "password1": password1,
            "password2": password2,
            "first_name": first_name,
            "last_name": last_name,
        }
        response = self.client.post(self.url, data)
        self.assertEqual(response.status_code, expected_status)

    def test_valid_registration(self):
        self.check_data(expected_status=200)
        email = "new@example.com"
        password = "Another decent password..."

        try:
            new_user = User.objects.get(email=email)
        except User.DoesNotExist:
            self.fail("New user was not created.")
        self.assertEqual(new_user.email, email)
        self.assertTrue(new_user.check_password(password))

    def test_empty_form(self):
        response = self.client.post(self.url)
        self.assertEqual(response.status_code, 400)

    def test_email_collision(self):
        self.check_data(email="existing@example.com", expected_status=409)

    def test_capitalised_collision(self):
        self.check_data(email="existing@EXAMPLE.com", expected_status=409)
        self.assertFalse(User.objects.filter(email__exact='existing@EXAMPLE.com').exists())
        self.assertEqual(len(User.objects.all()), 1)
        self.assertFalse(User.objects.get(email="existing@example.com").check_password("Another decent password..."))

    def test_invalid_email(self):
        self.check_data(email="test.com")
        self.assertFalse(User.objects.filter(email__iexact='test.com').exists())

    def test_name_overflow(self):
        self.check_data(first_name="A"*5000)
