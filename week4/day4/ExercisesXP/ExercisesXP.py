#Exercise 1 : Restaurant Menu Manager
import psycopg2
import os
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
    CREATE TABLE Menu_Items (
        item_id : SERIAL PRIMARY KEY,
        item_name : VARCHAR(30) NOT NULL,
        item_price : SMALLINT DEFAULT 0
    )
'''

'''
cur.execute('SELECT * FROM Menu_Items')
rows = cur.fetchall()
for row in rows:
    print(row)


cur.close()
conn.close()'''