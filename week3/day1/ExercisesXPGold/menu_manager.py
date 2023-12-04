'''
The purpose of this exercise is to create a restaurant menu. 
The code will allow a manager to add and delete dishes.

Create a python file called menu_manager.py.

Create a class called MenuManager.

Create a method __init__ that instantiates an attribute called menu. 
The menu attributes value will be all the current dishes (list of dictionaries). 
Each dish will be stored in a dictionary where the keys are name, price, spice 
level and gluten index (which value is a boolean).

Here is a list of the dishes currently on the menu:

    Soup – 10 – B - False
    Hamburger – 15 - A - True
    Salad – 18 - A - False
    French Fries – 5 - C - False
    Beef bourguignon– 25 - B - True

    Meaning: For the spice level:
       • A = not spicy,
       • B = a little spicy,
       • C = very spicy


The dishes provided above should be the value of the menu attribute.

Create a method called add_item(name, price, spice, gluten). 
This method will add new dishes to the menu.

Create a method called update_item(name, price, spice, gluten). 
This method checks whether a dish is in the menu, if the dish exists then update it. 
If not notify the manager that the dish is not in the menu.

Create a method called remove_item(name). 
This method should check if the dish is in the menu, 
if the dish exists then delete it and print the updated dictionary. 
If not notify the manager that the dish is not in the menu.


class MenuManager():
    def __init__(self, menu):
        self.menu = menu  '''

class MyClass(object):
    def func(self):
        print("I'm being called from the Parent class")


class ChildClass(MyClass):
    def func(self):
        print("I'm actually being called from the Child class")
        print("But...")
        # Calling the `func()` method from the Parent class.
        super(ChildClass, self).func()

class GrandChildClass(ChildClass):
    def func(self):
        print("I'm actually being called from the GrandChildClass class")
        print("But...")
        # Calling the `func()` method from the Parent class.
        super(ChildClass, self).func()        

'''my_instance_2 = ChildClass()
my_instance_2.func()'''

my_instance_3 = GrandChildClass()
my_instance_3.func()