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
create_table_query = '''
    CREATE TABLE users (
        id SERIAL PRIMARY KEY NOT NULL,
        username VARCHAR NOT NULL,
        email VARCHAR NOT NULL,
        age INTEGER NOT NULL
    )
'''
# Выполнение SQL запроса на создание таблицы
#cur.execute(create_table_query)

# Фиксация изменений в базе данных
#conn.commit()
'''
# Insert query
insert_query = 'INSERT INTO users (username, email, age) VALUES (%s, %s, %s)'
data_to_insert = ('Varvara', 'varkotgmail.com', 33)
cur.execute('INSERT INTO users (username, email, age) VALUES (%s, %s, %s)', ('Varvara', 'varkotgmail.com', 33))

#Update a user's information based on their id.

# Update query
update_query = 'UPDATE users SET username=%s, email=%s, age=%s WHERE id= %s'
new_value = ('Jessica', 'jessy@gmail.com', 17, 1)
cur.execute(update_query, new_value)

#conn.commit()
'''
#Delete a user from the users table based on their id.

cur.execute('DELETE FROM users WHERE id=%s', ('2'))
conn.commit()

# Execute a SELECT query
cur.execute('SELECT * FROM users')
rows = cur.fetchall()

for row in rows:
    print(row)


cur.close()
conn.close()
