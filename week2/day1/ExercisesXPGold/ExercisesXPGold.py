#Exercise 1
print('Hello world \n' * 4 + 'I love python \n' * 4)

#Exercise 2
month = int(input('Please, input a month (1 to 12)'))

if month > 2 and month < 6:
    print('Spring')
elif month > 5 and month < 9:
    print('Summer')
elif month > 8 and month < 12:
    print('Autumn')
elif month == 12 or month < 3:
    print('Winter')  

