#Count Occurence
'''
Write a program which takes a string and a character as an input, 
and finds out the number of occurrences the character has in the string.
String: Programming is cool!
Character: o
3
'''

def ask_question():
    user_str = input('Please, input string:')
    user_letter = input('Please, input letter:')

    count = 0

    for i in user_str:
        if i == user_letter:
            count += 1
    print(count)     

ask_question()    