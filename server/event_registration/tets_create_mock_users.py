from event_registration.models import User, Registration, RegistrantDetail

# MOCK USERS DATA TO CHECK API /api/registrations/

# Create user 1
test_user1, created1 = User.objects.get_or_create(
    email='test@test.com')  # type: ignore[attr-defined]
test_user1.set_password('test@test.com')  # password = email
test_user1.first_name = 'Test'
test_user1.last_name = 'User1'
test_user1.save()

# Create user 2
test_user2, created2 = User.objects.get_or_create(
    email='test2@test.com')  # type: ignore[attr-defined]
test_user2.set_password('test2@test.com')  # password = email
test_user2.first_name = 'Test2'
test_user2.last_name = 'User2'
test_user2.save()

# For each user, create two registrations and registrant details


def create_regs(user, reg_names):
    for first, last, status in reg_names:
        reg = Registration.objects.create(
            user=user, status=status)  # type: ignore[attr-defined]
        RegistrantDetail.objects.create(  # type: ignore[attr-defined]
            registration=reg,
            is_user=False,
            first_name=first,
            last_name=last,
            date_of_birth='2010-01-01'  # Add required date_of_birth field
        )
        print(
            f'Created registration {reg.id} for {first} {last} (status: {status})')


create_regs(test_user1, [
    ('Alice', 'Smith', 'draft'),
    ('Bob', 'Johnson', 'submitted'),
])

create_regs(test_user2, [
    ('Charlie', 'Brown', 'draft'),
    ('Diana', 'Prince', 'submitted'),
])

print(f"Created {User.objects.count()} users")
print(f"Created {Registration.objects.count()} registrations")
print(f"Created {RegistrantDetail.objects.count()} registrant details")
