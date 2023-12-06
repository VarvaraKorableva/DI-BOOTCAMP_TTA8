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
        try: 
            self.amount += int(other.amount)
            return self.amount

        except TypeError:
            print(f"Cannot add between Currency type {self.currency} and {other.currency}")




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
'''c1 += c2
print(c1)
20 dollars

c1 + c3
TypeError: Cannot add between Currency type <dollar> and <shekel>


c1
10 dollars

c1 += c2
c1
20 dollars

c1 + c3
TypeError: Cannot add between Currency type <dollar> and <shekel>
'''        