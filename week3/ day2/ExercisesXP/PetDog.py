from ExercisesXP import Dog
import random
#Exercise 3 : Dogs Domesticated

class PetDog(Dog):
    def __init__(self, name, age, weight, trained = False):
        super().__init__(name, age, weight)
        self.trained = trained

    def train(self):   
        self.trained = True
        print(self.bark())

    def play(self, *args):
        names = ','.join(args)
        print(f'{names} all play together')

    def do_a_trick(self):
        choice = random.choice([
             f'{self.name} does a barrel roll', 
             f'{self.name} stands on his back legs', 
             f'{self.name} shakes your hand', 
             f'{self.name} plays dead'
            ])  
        if self.trained:
            print(choice)


my_dog = PetDog('Tyzik', 12, 15, True)
my_dog.do_a_trick()
