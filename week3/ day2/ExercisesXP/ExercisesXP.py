#Exercise 1 : Pets
'''
Create another cat breed named Siamese which inherits from the Cat class.
Create a list called all_cats, which holds three cat instances : 
one Bengal, one Chartreux and one Siamese.
Those three cats are Sara’s pets. Create a variable called sara_pets 
which value is an instance of the Pet class, and pass the variable 
all_cats to the new instance.
Take all the cats for a walk, use the walk method.
'''

class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    
class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'   

bengal = Bengal('Sara', 3)   
chartreux = Chartreux('Lora', 7)
siamese = Siamese('Ron', 6)

all_cats = [bengal, chartreux, siamese]

sara_pets = Pets(all_cats)

sara_pets.walk()

#Exercise 2 : Dogs

class Dog():
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
       return f'{self.name} is barking'    

    def run_speed(self):
       speed = self.weight / self.age * 10
       return speed 
    
    def fight(self, other_dog):
        speed = self.run_speed()
        our_dog = speed * self.weight

        other_dog_speed = other_dog.run_speed()
        other_dog_weight = other_dog.weight
        other_dog = other_dog_speed * other_dog_weight

        if our_dog > other_dog:
            return f'{self.name} won the fight'
        else:
            return f'{other_dog.name} won the fight'


my_dog = Dog('Gera', 12, 10)
grammer_dog = Dog('Lora', 10, 20)
mammy_dog = Dog('Lokki', 8, 8)

print(my_dog.bark())
print(my_dog.run_speed())
print(my_dog.fight(mammy_dog))

#Exercise 4 : Family

class Family():
    def __init__(self, members, last_name):
        self.members = members
        self.last_name = last_name

    def born(self, **kwargs):
        self.members.append(kwargs)
        print('Congratulations!')    
        return self.members
    
    def is_18(self, name_member):
        for member in self.members:
            if member['name'] == name_member:
                if member['age'] > 18:
                    return True
                else:
                    return False
    
    def family_presentation(self):

        members_details = []
        for member in self.members:
            for key in member:
                members_details.append(f" {key}: {member[key]}")
            
        print(f"The family’s last name is {self.last_name}, members’ details is - {(','.join(members_details))}")
        
famili_l =     [
        {'name':'Michael','age':35,'gender':'Male','is_child':False},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False}
    ]

test = Family(famili_l, 'Sonya')

test.born(name='Mark', age=13, gender='Male', is_child=False)

print(test.is_18('Mark'))
test.family_presentation()

#Exercise 5 : TheIncredibles Family

class TheIncredibles(Family):
    def __init__(self, members, last_name):
        super().__init__(members, last_name)

    def use_power(self, incredible_name):
        if self.is_18(incredible_name):
            print(f'super power is {self.power}')
        else:
            raise Exception(f'{incredible_name}, you are not over 18 years old')    
        
    def incredible_presentation(self):   
        print('Here is our powerful family!') 
        self.family_presentation()
     

Incredibles_members_l = [
        {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
    ]

incredibles_family = TheIncredibles(Incredibles_members_l, 'Incredibles')
incredibles_family.incredible_presentation()

incredibles_family.born(name='Jack', age='0', gender='Male', is_child=True, power='Unknown Power')
incredibles_family.incredible_presentation()