import psycopg2

# Establish a connection
conn = psycopg2.connect(
    dbname = 'yvepsghh',
    user='yvepsghh',
    password='IKmSqBNDoPrCPOI9MFnKNF72cZmr30WB',
    host='flora.db.elephantsql.com', 
    port='5432'
)

# Create a cursur object to execute SQL queries
cur = conn.cursor()

# CRUD  - Create (insert) Read (select) Update (update) Delete (delete)

# Insert query
# insert_query = 'INSERT INTO products (name, price) VALUES (%s, %s)'
# data_to_insert = ('iKey', 750)
# # cur.execute(insert_query, data_to_insert)
# cur.execute('INSERT INTO products (name, price) VALUES (%s, %s)', ('iKey', 750))



# Update query
# update_query = 'UPDATE products SET name=%s, price=%s WHERE id= %s'
# new_value = ('iCar2024', 9999, 8)
# cur.execute(update_query, new_value)

# Delete query
cur.execute('DELETE FROM products WHERE id=%s', ('8'))

# Commit the transaction
conn.commit()


# Execute a SELECT query
cur.execute('SELECT * FROM products')
rows = cur.fetchall()

for row in rows:
    print(row)


# Close the cursur and the connection
cur.close()
conn.close()