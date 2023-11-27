#Exercise1 : Set

my_fav_numbers = {1,2,3,4,5}
my_fav_numbers.add(8)
my_fav_numbers.add(9)
my_fav_numbers.pop()

friend_fav_numbers = {1,6,8,9}

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

print(our_fav_numbers)

#Exercise 2: Tuple
#Given a tuple which value is integers, is it possible to add more integers to the tuple?
#No.It's impossible, because tuples are immutable lists, which means items can’t be changed.

#Exercise 3: List

basket = ["Banana", "Apples", "Oranges", "Blueberries"]

basket.remove("Banana")#O(N)
basket.pop() #O(1)

basket.append("Kiwi")
basket.insert(0,"Apples")

count_apples = basket.count("Apples")

basket.clear()

print(basket)

#Exercise 4: Floats

#Recap – What is a float? What is the difference between an integer and a float?
# an integer it's a whole number(like: 1, 2, 3, 4 etc.) and float it's a fractional number(like: 1.3, 2.2, 3.6, 4.5 etc.)

l = list()
for i in range(15, 51, 5):
    if i % 10 == 0:
        l.append(int(i / 10))
    else:
        l.append(i / 10)    

print(l)

#Exercise 5: For Loop
'''
Use a for loop to print all numbers from 1 to 20, inclusive.
Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.
'''

arr = list(range(1,21))

for i in arr:
    print(i)

for i in range(len(arr)):
    if i % 2 == 0: 
        print(arr[i])

#Exercise 6 : While Loop
'''
Write a while loop that will continuously ask the user for their name, 
unless the input is equal to your name.        
'''

my_name = 'Varvara'
user_name = input('Input your name, please:')

while user_name.capitalize() != my_name:
    user_name = input('Input your name, please:')
    if user_name == my_name:
        break

#Exercise 7: Favorite Fruits
'''
Ask the user to input their favorite fruit(s) (one or several fruits).
Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
Store the favorite fruit(s) in a list (convert the string of words into a list of words).
Now that we have a list of fruits, ask the user to input a name of any fruit.
If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.
'''
favorite_fruits = input('Please, input your favorite fruits, but separate the fruits with a single space(apple mango cherry)')
favorite_fruits_l = favorite_fruits.split()

user_chose = input('Please, input any fruit')
user_chose_l = user_chose.split()

print(favorite_fruits_l)
print(user_chose_l)

for i in user_chose_l:
    if i in favorite_fruits_l:
        print('You chose one of your favorite fruits! Enjoy!')
    else:
        print('You chose a new fruit. I hope you enjoy')  


#Exercise 8: Who Ordered A Pizza ?
'''
1.Write a loop that asks a user to enter a series of pizza toppings, 
when the user inputs ‘quit’ stop asking for toppings.
2.As they enter each topping, print a message saying you’ll 
add that topping to their pizza.
3.Upon exiting the loop print all the toppings on the pizza pie 
and what the total price is (10 + 2.5 for each topping).
'''    
toppings_l = []
topping = ''
full_pizza_sum = 10

while topping != 'quit':
    topping = input('Please, what you want to add from pizza toppings:')
    if topping == 'quit':
        str_toppings = ', '.join(toppings_l)
        print(f'Your pizza with {str_toppings} will be ready so soon and the price is {full_pizza_sum} ')
        break
    else:
        toppings_l.append(topping)
        full_pizza_sum += 2.5

        print(f'{topping} is added to your pizza!')

#Exercise 9: Cinemax
'''
1.A movie theater charges different ticket prices depending on a person’s age.
if a person is under the age of 3, the ticket is free.
if they are between 3 and 12, the ticket is $10.
if they are over the age of 12, the ticket is $15.

2.Ask a family the age of each person who wants a ticket.

3.Store the total cost of all the family’s tickets and print it out.

'''

ages = input('Please input the ages of all persons who need tickets, but separate the age with a single space(1 3 4):')
ages_l = ages.split()
numbers_l_with_ages = []
total_price = 0

for i in ages_l:
    numbers_l_with_ages.append(int(i))

for i in numbers_l_with_ages:
    if i > 3 and i < 12:
        total_price += 10
    elif i > 12:
        total_price += 15   
print(f'Cost of your ticket is {total_price}')

'''
4.A group of teenagers are coming to your movie theater and want to watch 
a movie that is restricted for people between the ages of 16 and 21.
Given a list of names, write a program that asks teenager for their age, 
if they are not permitted to watch the movie, remove them from the list.
At the end, print the final list.
'''

teenagers_l = ['Mary', 'Kate', 'Mike']
final_teenagers_l = []

for i in teenagers_l:
    age = int(input(f'{i} How old are you?'))
    if age > 16:
       final_teenagers_l.append(i) 

print(final_teenagers_l) 

#Exercise 10 : Sandwich Orders
'''
Using the list below :

sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", 
"Avocado sandwich", "Pastrami sandwich", "Egg sandwich", 
"Chicken sandwich", "Pastrami sandwich"]

The deli has run out of pastrami, use a while loop to remove all 
occurrences of “Pastrami sandwich” from sandwich_orders.
We need to prepare the orders of the clients:
Create an empty list called finished_sandwiches.
One by one, remove each sandwich from the sandwich_orders 
while adding them to the finished_sandwiches list.
After all the sandwiches have been made, print a message listing 
each sandwich that was made, such as:
I made your tuna sandwich
'''
sandwich_orders = [
    "Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", 
    "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"
]

finished_sandwiches = []


while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")
    finished_sandwiches.append("Pastrami sandwich")
    if not("Pastrami sandwich" in sandwich_orders):
        for i in sandwich_orders:
            print(f'I made your {i}')
        break    
        
