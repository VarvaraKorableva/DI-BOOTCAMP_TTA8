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
        return self.amount + int(other)
    
    def __iadd__(self, other):
        pass
        
        '''try: 
            self.amount += int(other.amount)
            return self.amount

        except TypeError:
            print(f"Cannot add between Currency type {self.currency} and {other.currency}")
'''



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


'''
c1 += 5
c1
10 dollars

c1 += c2
 c1
20 dollars

c1 + c3
TypeError: Cannot add between Currency type <dollar> and <shekel>
'''     

# Exercise 3: String Module
'''
string.ascii_letters
The concatenation of the ascii_lowercase and ascii_uppercase constants described below. 
This value is not locale-dependent.
'''

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
'''
Exercise 5 : Amount Of Time Left Until January 1st
Instructions
Create a function that displays the amount of time left from now until January 1st.
(Example: the 1st of January is in 10 days and 10:34:01hours).
'''
#Exercise 6 : Birthday And Minutes

def min_of_live_func(birthdate):
    today =  datetime.datetime.now().date()
    years_of_live = today - birthdate





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
 