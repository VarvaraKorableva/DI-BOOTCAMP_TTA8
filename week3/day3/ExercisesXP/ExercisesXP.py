import string
import random
import datetime
from faker import Faker

#Exercise 1: Currencies

class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        str_to_return = f"{self.amount} {self.currency}s"  
        return str_to_return

    def __int__(self):
        return int(self.amount)

    def __repr__(self):
        return f"{self.amount} {self.currency}s"
    
    def __add__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency types {self.currency} and {other.currency}")
            return Currency(self.currency, self.amount + other.amount)
        return Currency(self.currency, self.amount + other)

    def __iadd__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency types {self.currency} and {other.currency}")
            self.amount += other.amount
        else:
            self.amount += other
        return self



c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(str(c1))
print(int(c1))
print(repr(c1))
print(c1 + 5)
print(c1 + c2)
print(c1)

c1 += 5
print(c1)

c1 += c2
print(c1)

c1 + c3 

# Exercise 3: String Module

def generate_random_string(length):
    letters = string.ascii_letters
    return ''.join(random.choice(letters) for _ in range(length))

random_string = generate_random_string(5)

print(random_string)

#Exercise 4 : Current Date

def display_current_date():
    print("Today is:", datetime.datetime.now().date())

display_current_date()

#Exercise 5 : Amount Of Time Left Until January 1st

def display_time():
    now = datetime.datetime.now()
    next_year = now.year + 1
    first_january = datetime.datetime(next_year, 1, 1)
    difference = first_january - now
    days = difference.days
    hours, remainder = divmod(difference.seconds, 3600)
    minutes, seconds = divmod(remainder, 60)

    return f"The 1st of January is in {days} days and {hours}:{minutes}:{seconds} hours."

print(display_time())

#Exercise 6 : Birthday And Minutes

def min_of_live_func(birthdate):
    birth_datetime = datetime.datetime.strptime(birthdate, '%Y-%m-%d')
    today = datetime.datetime.now().date()
    years_of_lived = today - birth_datetime.date()
    minutes_lived = years_of_lived.total_seconds() / 60

    return int(minutes_lived)

print(f'You live near {min_of_live_func("1990-12-04")} mins')



#Exercise 7 : Faker Module

fake = Faker()
users = []

def adding_func():
    users.append({
        'name': fake.name(),
        'address': fake.address(),
        'language_code': fake.language_code(),
    })

adding_func()
print(users)
