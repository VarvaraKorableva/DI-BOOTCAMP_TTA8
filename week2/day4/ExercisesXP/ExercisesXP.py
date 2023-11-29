import random

#Exercise 1 : What Are You Learning ?
'''
Write a function called display_message() that prints one 
sentence telling everyone what you are learning in this course.
Call the function, and make sure the message displays correctly.
'''

def display_message():
    print('We are studying web development')

display_message()    

#Exercise 2: What’s Your Favorite Book ?
'''
Write a function called favorite_book() that accepts one parameter called title.
The function should print a message, such as "One of my favorite books is <title>".
For example: “One of my favorite books is Alice in Wonderland”
Call the function, make sure to include a book title as an argument when calling the function.
'''

def favorite_book(title):
    print(f'One of my favorite books is {title}')

favorite_book('Alice in Wonderland')    

#Exercise 3 : Some Geography
"""
Write a function called describe_city() that accepts the name of a city and its 
country as parameters.
The function should print a simple sentence, such as "<city> is in <country>".
For example “Reykjavik is in Iceland”
Give the country parameter a default value.
Call your function.
"""

def describe_city(city, country):
    print(f'{city} is in {country}')

describe_city('Reykjavik', 'Iceland')    

#Exercise 4 : Random
'''
Create a function that accepts a number between 1 and 100 and generates another number 
randomly between 1 and 100. Use the random module.
Compare the two numbers, if it’s the same number, 
display a success message, otherwise show a fail message and display both numbers.
'''

def accepts_fun(some_number):
    randomly_num = random.randint(0,100)
    if randomly_num == some_number:
       print('success message')
    else:
        print(f'fail message, your number is {some_number}, random numer is {randomly_num}')

accepts_fun(99)  

#Exercise 5 : Let’s Create Some Personalized Shirts !
'''
Write a function called make_shirt() that accepts a size and 
the text of a message that should be printed on the shirt.
The function should print a sentence summarizing the size of 
the shirt and the message printed on it, such as 
"The size of the shirt is <size> and the text is <text>"
Call the function make_shirt().

Modify the make_shirt() function so that shirts are large 
by default with a message that reads “I love Python” by default.
Make a large shirt with the default message
Make medium shirt with the default message
Make a shirt of any size with a different message.

Bonus: Call the function make_shirt() using keyword arguments.
'''
def make_shirt(size ='L', text='I love Python'):
    print(f"The size of the shirt is {size} and the text is {text}")

make_shirt()  #Make a large shirt with the default message  
make_shirt('M') #Make medium shirt with the default message
make_shirt('S', 'My new shirt') #Make a shirt of any size with a different message.
make_shirt(size='M', text="small text") #Bonus: Call the function make_shirt() using keyword arguments.

#Exercise 6 : Magicians
"""
Using this list of magician’s names

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

Create a function called show_magicians(), 
which prints the name of each magician in the list.
Write a function called make_great() that modifies 
the original list of magicians by adding the phrase "the Great" to each magician’s name.
Call the function make_great().
Call the function show_magicians() to see that the list has actually been modified.
"""

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians(l):
    for i in l:
        print(i)

def make_great(l):
    '''global magician_names
    magician_names = ['the Great ' + i for i in l] 
    return magician_names  
    '''
    for i in range(len(l)):
        l[i] = 'the Great ' + l[i]
    return l  


make_great(magician_names)
show_magicians(magician_names)

#Exercise 7 : Temperature Advice
'''
Create a function called get_random_temp().
This function should return an integer between -10 and 40 degrees (Celsius), selected at random.
Test your function to make sure it generates expected results.

Create a function called main().
Inside this function, call get_random_temp() to get a temperature, and store its value 
in a variable.
Inform the user of the temperature in a friendly message, eg. “The temperature right now 
is 32 degrees Celsius.”

Let’s add more functionality to the main() function. 
Write some friendly advice relating to the temperature:
below zero (eg. “Brrr, that’s freezing! Wear some extra layers today”)
between zero and 16 (eg. “Quite chilly! Don’t forget your coat”)
between 16 and 23
between 24 and 32
between 32 and 40

Change the get_random_temp() function:
Add a parameter to the function, named ‘season’.
Inside the function, instead of simply generating a random number between -10 and 40, 
set lower and upper limits based on the season, eg. if season is ‘winter’, 
temperatures should only fall between -10 and 16.

Now that we’ve changed get_random_temp(), let’s change the main() function:
Before calling get_random_temp(), we will need to decide on a season, 
so that we can call the function correctly. Ask the user to type in a season - 
‘summer’, ‘autumn’ (you can use ‘fall’ if you prefer), ‘winter’, or ‘spring’.
Use the season as an argument when calling get_random_temp().

Bonus: Give the temperature as a floating-point number instead of an integer.
Bonus: Instead of asking for the season, ask the user for the number of the month (1 = January, 12 = December). Determine the season according to the month.
'''

def get_random_temp(season):
    if season == 'winter':
        degrees = random.randint(-10,16)
        return degrees
    if season == 'spring':
        degrees = random.randint(16,23)
        return degrees
    if season == 'summer':
        degrees = random.randint(32,40)
        return degrees
    if season == 'autumn' or season == 'fall':
        degrees = random.randint(24,32)
        return degrees

#print(get_random_temp('autumn'))
   

def main():
    season = input('Please, input season (summer, autumn, winter or spring):')
    temperature = get_random_temp(season.lower())
    print(f'The temperature right now is {temperature} degrees Celsius.')
    if temperature > 31:
        print("It's extremely hot today, it's probably better to stay home")
    elif temperature > 23 and temperature < 32:
        print("You mast to dring more water today")
    elif temperature > 16 and temperature < 23:
        print("Good weather today!")
    elif temperature > 0 and temperature < 17:
        print("Quite chilly! Don’t forget your coat!")
    else:    
        print("Brrr, that’s freezing! Wear some extra layers today")     

main()

#Exercise 8 : Star Wars Quiz

data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]
'''
Bonus : display to the user the questions he answered wrong, 
his answer, and the correct answer.
If he had more then 3 wrong answers, ask him to play again.
'''

def informs_func(count_of_right, count_of_wrong):
    print (f'count of right answers {count_of_right}, count of wrong answers {count_of_wrong}')

def ask_and_check_questions_func(data):
    wrong_answers = []
    count_of_right = 0
    count_of_wrong = 0

    correct_answer = []
    wrong_answered_questions = []

    for i in data:
        print(i['question'])
        answer = input('Please, input your answer:')
        if i['answer'] == answer:
            count_of_right += 1 
        else:
            count_of_wrong += 1
            wrong_answers.append(answer)  
            correct_answer.append(i['answer'])
            wrong_answered_questions.append(i['question'])

    informs_func(count_of_right, count_of_wrong)
    print(wrong_answers)  
    for i in zip(wrong_answered_questions, wrong_answers, correct_answer):
        print(f'For question "{i[0]}", you answer was "{i[1]}", correct answer is "{i[2]}"')
    if len(wrong_answers) > 3:
        print('Do you want to play again?')    

ask_and_check_questions_func(data)