'''Using this REST Countries API, create the functionality which 
will write 10 random countries to your database.

These are the attributes which you should populate your tables 
with: name, capital, flag, subregion, population.
'''

import requests
import json
import psycopg2
import os
import random
from dotenv import load_dotenv

load_dotenv()
# Установка соединения с базой данных
conn = psycopg2.connect(
    dbname=os.getenv('DB_NAME'),
    user=os.getenv('DB_USER'),
    password=os.getenv('DB_PASS'),
    host=os.getenv('DB_HOST'), 
    port=os.getenv('PORT')
)
# Создание объекта курсора
cur = conn.cursor()

# SQL запрос на создание таблицы
'''create_table_query = 
    CREATE TABLE countries_table (
        id SERIAL PRIMARY KEY,
        name VARCHAR(30) NOT NULL,
        capital VARCHAR(30) NOT NULL,
        flag VARCHAR(30) NOT NULL,
        subregion VARCHAR(30) NOT NULL,
        population INT NOT NULL
    )

cur.execute(create_table_query)
conn.commit()'''


res = requests.get('https://restcountries.com/v3.1/all') 

data = random.choices(res.json(), k=10)

countries = []

for i in data:
    country = {}

    country['name'] = i['name']['official']
    country['capital'] = i['capital'][0]
    country['flag'] = i['flag']
    country['subregion'] = i['subregion']
    country['population'] = i['population']

    countries.append(country)

for i in countries:
    insert_query = 'INSERT INTO countries_table (name, capital, flag, subregion, population) VALUES (%s, %s, %s,%s, %s)'
    data_to_insert = (i['name'], i['capital'], i['flag'], i['subregion'], i['population'])
    cur.execute(insert_query, data_to_insert)
    conn.commit()


cur.execute('SELECT * FROM countries_table')
rows = cur.fetchall()
for row in rows:
    print(row)

cur.close()
conn.close()


