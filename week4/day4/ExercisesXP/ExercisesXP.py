#Exercise 1 : Restaurant Menu Manager
import psycopg2

# Установка соединения с базой данных
conn = psycopg2.connect(
    dbname = 'ungancxx',
    user='ungancxx',
    password='iadIBxUxB7ayQ0F6D04eup7D_TPFGIIW',
    host='flora.db.elephantsql.com', 
    port='5432'
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