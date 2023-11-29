#Challenge 1
"""
Ask a user for a word
Write a program that creates a dictionary. This dictionary stores the indexes of each letter in a list.

Make sure the letters are the keys.
Make sure the letters are strings.
Make sure the indexes are stored in a list and those lists are values.
Examples

"dodo" ➞ { "d": [0, 2], "o": [1, 3] }

"froggy" ➞ { "f":  [0], "r": [1], "o": [2], "g": [3, 4], "y": [5] }

"grapes" ➞ { "g": [0], "r": [1], "a": [2], "p": [3]}
"""

user_input = input('Please, input one word:')
user_input_l = list(user_input)
result = {}.fromkeys(user_input_l) #{'w': None, 'o': None, 'r': None, 'l': None, 'd': None}

for i in range(len(user_input_l)):
    if result[user_input_l[i]] == None:
        result[user_input_l[i]] = [i]
    else:    
        result[user_input_l[i]] += [i]
print(result)        

#Challenge 2
'''
Create a program that prints a list of the items you 
can afford in the store with the money you have in your wallet.
Sort the list in alphabetical order.
Return “Nothing” if you can’t afford anything from the store.

The key is the product, the value is the price

items_purchase = {
  "Water": "$1",
  "Bread": "$3",
  "TV": "$1,000",
  "Fertilizer": "$20"
}

wallet = "$300"

➞ ["Bread", "Fertilizer", "Water"]

items_purchase = {
  "Apple": "$4",
  "Honey": "$3",
  "Fan": "$14",
  "Bananas": "$4",
  "Pan": "$100",
  "Spoon": "$2"
}

wallet = "$100" 

➞ ["Apple", "Bananas", "Fan", "Honey", "Spoon"]

items_purchase = {
  "Phone": "$999",
  "Speakers": "$300",
  "Laptop": "$5,000",
  "PC": "$1200"
}

wallet = "$1" 

➞ "Nothing"
'''
items_purchase = {
  "Phone": "$999",
  "Speakers": "$300",
  "Laptop": "$5,000",
  "PC": "$1,200"
}

wallet = "$10000" 

wallet_num = int(wallet[1:])

purchases = []

for key in items_purchase.keys():
    if ',' in items_purchase[key]:
        items_purchase[key] = items_purchase[key][:items_purchase[key].index(',')] + items_purchase[key][items_purchase[key].index(',')+1:]#index
        
    if wallet_num >= int(items_purchase[key][1:]):
       purchases.append(key) 
       wallet_num -= int(items_purchase[key][1:])

    else:
        continue   



if purchases == []:
    print("Nothing")
else:    
    print(purchases)        
          