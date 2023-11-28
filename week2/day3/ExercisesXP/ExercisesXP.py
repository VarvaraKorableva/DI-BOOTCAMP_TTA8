#Exercise 1 : Convert Lists Into Dictionaries
'''
Convert the two following lists, into dictionaries.
Hint: Use the zip method
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
Expected output:
{'Ten': 10, 'Twenty': 20, 'Thirty': 30}
'''

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

result = dict(zip(keys, values))

print(result)

#Exercise 2 : Cinemax
"""
Instructions
A movie theater charges different ticket prices depending on a person’s age.
if a person is under the age of 3, the ticket is free.
if they are between 3 and 12, the ticket is $10.
if they are over the age of 12, the ticket is $15.

Given the following object:

family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}


How much does each family member have to pay ?

Print out the family’s total cost for the movies.
"""

family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
total_cost = 0

for i in family.values():
    if i > 3 and i < 12:
        total_cost += 10
    elif i > 12:
        total_cost += 15
print(total_cost)   

"""
Bonus: Ask the user to input the names and ages instead of using 
the provided family variable (Hint: ask the user for names and ages and 
add them into a family dictionary that is initially empty).
"""

names = input('Please, inpit  names (with space like this- Kate Ron Jon):').split()
ages = input('Please, inpit  ages (with space like this- 56 17 19):').split()

num_ages = [int(i) for i in ages]

family_dictionary = dict(zip(names,num_ages))

print(family_dictionary)

#Exercise 3: Zara

brand = {
    'name': 'Zara', 
    'creation_date': 1975,
    'creator_name': 'Amancio Ortega Gaona ',
    'type_of_clothes': ['men', 'women', 'children', 'home'],
    'international_competitors': ['Gap', 'H&M', 'Benetton'],
    'number_stores': 7000,
    'major_color': {
        'France': 'blue', 
        'Spain': 'red', 
        'US': ['pink', 'green']
    } 
}
#3. Change the number of stores to 2.
brand['number_stores'] = 2

#4. Print a sentence that explains who Zaras clients are.
l = brand['type_of_clothes']
print(f'Clients are {l}')

#5. Add a key called country_creation with a value of Spain.
brand['country_creation'] = 'Spain'

#6. Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.
if 'international_competitors' in brand:
    brand['international_competitors'].append('Desigual')

#7. Delete the information about the date of creation.
del brand['creation_date']

#8. Print the last international competitor.
print(brand['international_competitors'][-1])

#9. Print the major clothes colors in the US.
print(brand['major_color']['US'])

#10. Print the amount of key value pairs (ie. length of the dictionary).
print(len(brand))

#11. Print the keys of the dictionary.
print(brand.keys())

#12. Create another dictionary called more_on_zara with the following details:
more_on_zara = {
    'creation_date': 1975,
    'number_stores': 10000
}

#13. Use a method to add the information from the dictionary more_on_zara to the dictionary brand.
brand.update(more_on_zara)

#14. Print the value of the key number_stores. What just happened ?
print(len(brand)) #the number of keys has increased


#Exercise 4 : Disney Characters

users = ["Mickey","Minnie","Donald","Ariel","Pluto"]

# print(disney_users_A)
#{"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}

numbers = list(range(len(users)))
disney_users_A = dict(zip(users, numbers))

print(disney_users_A)

#print(disney_users_B)
#{0: "Mickey",1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}

numbers = list(range(len(users)))
disney_users_B = dict(zip(numbers, users))

print(disney_users_B)

#print(disney_users_C)
#{"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}

sorted_users = sorted(users)
numbers = list(range(len(users)))
disney_users_C = dict(zip(sorted_users, numbers))

print(disney_users_C)

'''Only recreate the 1st result for:
The characters, which names contain the letter “i”.
'''
letter_i_users = []

for item in users:
    for i in item:
        if i == "i":
            if item in letter_i_users:
                continue
            else: letter_i_users.append(item)  
            
numbers = list(range(len(letter_i_users)))
disney_users_A_If = dict(zip(letter_i_users, numbers))
print(disney_users_A_If)

#The characters, which names start with the letter “m” or “p”.
users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
starts_letters_m_or_p = []

for item in users:
        if item[0].lower() == "m" or item[0].lower() == "p":
            starts_letters_m_or_p.append(item)    
            
numbers = list(range(len(starts_letters_m_or_p)))
disney_users_M_or_P = dict(zip(starts_letters_m_or_p, numbers))
print(disney_users_M_or_P)