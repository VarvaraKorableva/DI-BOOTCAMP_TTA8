import math
import random

#Exercise 1 : Geometry
'''
Write a class called Circle that receives a radius as an argument (default is 1.0).
Write two instance methods to compute perimeter and area.
Write a method that prints the geometrical definition of a circle.
'''

class Circle():
    def __init__(self, radius = 1.0):
        self.radius = radius

    def  compute_perimeter(self):
        pi = math.pi
        perimeter = 2 * pi * self.radius

    def  compute_area(self):
        pi = math.pi
        area = pi * self.radius ** 2

    def definition_of_a_circle(self):
        definition = "A circle is a plane figure bounded by one curved line, and such that all straight lines drawn from a certain point within it to the bounding line, are equal. The bounding line is called its circumference and the point, its centre."     
        print(definition)

#Exercise 2 : Custom List Class
'''
Create a class called MyList, the class should receive a list of letters.
Add a method that returns the reversed list.
Add a method that returns the sorted list.
Bonus : Create a method that generates a second list with the same length as mylist. 
The list should be constructed with random numbers. (use list comprehension).
'''        

class MyList():
    def __init__(self, letters):
        self.letters = letters

    def revers_func(self): 
        self.letters = reversed(self.letters)
        return self.letters
    
    def sorted_func(self):
        self.letters = sorted(self.letters)
        return self.letters
    
    def generate_func(self):
        random_l = [random.randint(0,100) for i in range(len(self.letters))]  
        return random_l 

#Exercise 3 : Restaurant Menu Manager
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
  '''



