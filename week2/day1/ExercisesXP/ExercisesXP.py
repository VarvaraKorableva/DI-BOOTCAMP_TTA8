#Exercise 1
print('Hello world\n' * 4)

#Exercise 2
print(99 ** 3 * 8)

#Exercise 3
5 < 3 #false
3 == 3 #true
3 == "3" #false
#"3" > 3 #TypeError
"Hello" == "hello" #false

#Exercise 4
computer_brand = 'macbook'
print(f"I have a {computer_brand} computer")

#Exercise 5
name = 'Varvara'
age = 32
shoe_size = 39

print(f"Hello, I'am {name}, I'am {age} years old, and usually I wear {shoe_size} shoe size")

#Exercise 6
a = 7
b = 6

if a > b :
    print('Hello World')

#Exercise 7
number = int(input("Enter a number: "))

if number % 2 == 0 :
    print('number is even')
else:
    print('number is odd')    


#Write code that asks the user for their name and 
# determines whether or not you have the same name, 
# print out a funny message based on the outcome.    

#Exercise 8
my_name = 'Varvara'
name = input("Please, input your name: ").capitalize()

if name.lower() == my_name.lower():
    print('Wow! We have the same names!')
else:
    print(f'Hi {name}, my name is {my_name}, How are you?')    

#Exercise 9

height_inches = int(input('What is your height in inches? Please, input it here:'))

if height_inches > 145:
    print('You are tall enough to ride')
else:
    print('You need to grow some more to ride')     





