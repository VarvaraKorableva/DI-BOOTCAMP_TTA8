import random
import json
# Exercise 1 – Random Sentence Generator

def get_words_from_file(file_name):
    with open (file_name,'r') as f:
        file_text = f.read()
        words = file_text.split()

    return words

def get_random_sentence(length): 
    words_l = get_words_from_file('data.txt')
    return random.choices(words_l, k = length)

def main():
    print('You need to input number between 2 and 20, '
          'then you get sentence which has the number of words you entered from random words,')
    
    length = input("How long you want the sentence to be?:")

    try:
        if 2 <= int(length) <= 20:
           print(' '.join(get_random_sentence(int(length))).lower())
        else: 
           print('You need to input number between 2 and 20')
    except ValueError:
        print('You need to input whole number between 2 and 20')

main()

#Exercise 2: Working With JSON

import json

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""


data = json.loads(sampleJson) #to dict

salary = data['company']['employee']['payable']['salary']
print("Salary:", salary)

data['company']['employee']['birth_date'] = '04.12.1990'

updatedJson = json.dumps(data) #to JSON

with open('updated_data.json', 'w') as file:
    file.write(updatedJson)