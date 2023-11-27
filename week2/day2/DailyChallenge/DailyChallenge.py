#Challenge 1
'''
Ask the user for a number and a length.
Create a program that prints a list of multiples of the number until the list length reaches length.
Создать программу, которая выводит список кратных чисел этому числу до тех пор, 
пока длина списка не достигнет заданной длины.
Examples

number: 7 - length 5 ➞ [7, 14, 21, 28, 35]
number: 12 - length 10 ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
number: 17 - length 6 ➞ [17, 34, 51, 68, 85, 102]
'''
user_number = int(input('Please, input a number:'))
user_len = int(input('Please, input something:'))
multiples_numbers = []
i = 1
while len(multiples_numbers) < user_len:
    multiples_numbers.append(user_number * i)
    i += 1
    if len(multiples_numbers) >= user_len:
        break

print(multiples_numbers)

#Challenge 2
'''Write a program that asks a string to the user, and display a new 
string with any duplicate consecutive letters removed.
Examples

user's word : "ppoeemm" ➞ "poem"

user's word : "wiiiinnnnd" ➞ "wind"

user's word : "ttiiitllleeee" ➞ "title"

user's word : "cccccaaarrrbbonnnnn" ➞ "carbon"
Notes
Final strings won’t include words with double letters (e.g. “passing”, “lottery”).
'''

user__str = input('Please, input something:')

result = user__str[0]

for i in range(1,len(user__str)):
    if user__str[i-1] != user__str[i]:
        result += user__str[i]
print(result)



