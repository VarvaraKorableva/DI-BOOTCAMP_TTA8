import random

string10 = input('Write something for 10 characters, please:')

if len(string10) < 10:
    print('string not long enough')
elif len(string10) > 10:
    print('string too long')
elif len(string10) == 10: 
    print('perfect string')

print(f'first character is {string10[0]}, second character is {string10[len(string10) -1]}') 
letter_str = ''
for i in string10:
    letter_str += i
    print(letter_str)

str_to_l = list(string10)
random.shuffle(str_to_l)

print(str_to_l)


