import os
import requests
import json

dir_path = os.path.dirname(os.path.realpath(__file__))

data = []
for i in range(11):
    response = requests.get('https://api.chucknorris.io/jokes/random')
    if response.status_code == 200:
        data.append(response.json())

with open (dir_path + '/jokes.json', mode='a') as file:
    json.dump(data,file)

with open(dir_path + '/jokes.json', 'r') as file:
    json_data = json.load(file)    
    
print(json_data[2]['value'])

