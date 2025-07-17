from event_registration.models import User, Registration, RegistrantDetail

# Create two registrations for user with id=1
user = User.objects.get(id=1)

reg1 = Registration.objects.create(user=user, status='draft')
RegistrantDetail.objects.create(
    registration=reg1,
    is_user=False,
    first_name='Alice',
    last_name='Smith'
)

reg2 = Registration.objects.create(user=user, status='submitted')
RegistrantDetail.objects.create(
    registration=reg2,
    is_user=False,
    first_name='Bob',
    last_name='Johnson'
)

print('Test registrations created.')
