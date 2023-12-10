#Circle
import math

class SimpleCircle():
    def __init__(self, radius):
        self.__radius = radius

    def get_radius(self):
        return self.__radius

    def get_diameter(self):
        return self.__radius * 2
    
    def __call__(self):
        print(f'radius is: {self.get_radius()}, diameter is: {self.get_diameter()}')
    
    def area(self):
        #S = π × r2
        area = math.pi * self.get_radius() * self.get_radius()
        return area
    
    def __add__(self, other):
        return SimpleCircle(self.get_radius() + other.get_radius())
    
    def __gt__(self, other):
        return self.get_radius() > other.get_radius()
    
    def __eq__(self, other):
        return self.get_radius() == other.get_radius()
    
    def get_sorted(self, other):
        l = [self, other]
        return sorted(l, key = lambda x : x.get_radius())
    
    def __str__(self):
        return str(self.get_radius())


first_circle = SimpleCircle(15)
second_circle = SimpleCircle(20)

print(first_circle.get_radius())
print(first_circle.get_diameter())

first_circle()

print(first_circle.area())

(first_circle + second_circle)()

print(first_circle > second_circle)
print(first_circle < second_circle)
print(first_circle == second_circle)

#print(list(map(str,first_circle.get_sorted(second_circle))))
print(first_circle.get_sorted(second_circle))