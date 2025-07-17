from event_registration.models import User, Registration, RegistrantDetail

# Create user 1
test_user1, created1 = User.objects.get_or_create(email='test@test.com')  # type: ignore[attr-defined]
test_user1.set_password('test@test.com')  # password = email
test_user1.first_name = 'Test'
test_user1.last_name = 'User1'
test_user1.save()
print('User 1 created:', test_user1.email, 'ID:', test_user1.id)

# Create user 2
test_user2, created2 = User.objects.get_or_create(email='test2@test.com')  # type: ignore[attr-defined]
test_user2.set_password('test2@test.com')  # password = email
test_user2.first_name = 'Test2'
test_user2.last_name = 'User2'
test_user2.save()
print('User 2 created:', test_user2.email, 'ID:', test_user2.id)

# For each user, create two registrations and registrant details
def create_regs(user, reg_names):
    for first, last, status in reg_names:
        reg = Registration.objects.create(user=user, status=status)  # type: ignore[attr-defined]
        RegistrantDetail.objects.create(  # type: ignore[attr-defined]
            registration=reg,
            is_user=False,
            first_name=first,
            last_name=last
        )
        print(f'Registration for {first} {last} created for user {user.email}')

create_regs(test_user1, [
    ('Alice', 'Smith', 'draft'),
    ('Bob', 'Johnson', 'submitted'),
])

create_regs(test_user2, [
    ('Charlie', 'Brown', 'draft'),
    ('Diana', 'Prince', 'submitted'),
])

print('All test users and registrations created.')
