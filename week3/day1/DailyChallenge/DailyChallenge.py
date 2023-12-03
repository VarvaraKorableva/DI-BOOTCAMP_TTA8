'''
Instructions : Old MacDonald’s Farm
Take a look at the following code and output:
File: market.py

macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())
Output

McDonald's farm

cow : 5
sheep : 2
goat : 12

    E-I-E-I-0!


Create the code that is needed to receive the result provided above. Below are a few questions to assist you with your code:

Create a class called Farm. How should it be implemented?
Does the Farm class need an __init__ method? If so, what parameters should it take?
How many methods does the Farm class need?
Do you notice anything interesting about the way we are calling the add_animal method? What parameters should this function have? How many…?
Test your code and make sure you get the same results as the example above.
Bonus: nicely line the text in columns as seen in the example above. Use string formatting.


Expand The Farm
Add a method called get_animal_types to the Farm class. This method should 
return a sorted list of all the animal types (names) in the farm. 
With the example above, the list should be: ['cow', 'goat', 'sheep'].

Add another method to the Farm class called get_short_info. This 
method should return the following string: “McDonald’s farm has cows, 
goats and sheep.”. The method should call the get_animal_types 
function to get a list of the animals.

'''

class Farm():
    def __init__(self, farmer_name):
        self.farmer_name = farmer_name
        self.all_animals = {}

    def add_animal(self, animal, count = 1):
        if self.all_animals.get(animal):    
            self.all_animals[animal] += count
        else:
            self.all_animals[animal] = count  
        return self.all_animals 
    
    def get_info(self):
        res = f"{self.farmer_name}'s farm\n" 
        for key, value in self.all_animals.items():
            res += f'{key} : {value}\n' 
        return res + '\t E-I-E-I-0!'
    
    def get_animal_types(self):
        return sorted(self.all_animals.keys())
    
    def get_short_info(self):
        animals_l = self.get_animal_types()
        animals_str = ', '.join(animals_l[:-1])
                
        return f"{self.farmer_name}’s farm has {animals_str} and {animals_l[-1]}."
        #return "gfgfg {}, {} and {}".format(*animals_l)


macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())   
print(macdonald.get_short_info())