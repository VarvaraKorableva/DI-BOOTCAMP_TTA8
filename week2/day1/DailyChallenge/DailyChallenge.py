import random

string10 = input('Write something for 10 characters, please:')

if len(string10) < 10:
    print('string not long enough')
elif len(string10) > 10:
    print('string too long')
elif len(string10) == 10: 
    print('perfect string')

print(f'first character is {string10[0]}, second character is {string10[len(string10) -1]}') 

for i in string10:
    print(i)

str_to_l = list(string10)
random.shuffle(str_to_l)

print(str_to_l)


