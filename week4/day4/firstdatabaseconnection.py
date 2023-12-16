import psycopg2
import os
from dotenv import load_dotenv

load_dotenv()

# SQL запрос на создание таблицы
conn = psycopg2.connect(
    dbname=os.getenv('DB_NAME'),
    user=os.getenv('DB_USER'),
    password=os.getenv('DB_PASS'),
    host=os.getenv('DB_HOST'), 
    port=os.getenv('PORT')
)

# Создание объекта курсора
cur = conn.cursor()
cur.execute('SELECT * FROM products')
rows = cur.fetchall()
for row in rows:
    print(row)

cur.close()
conn.close()    
