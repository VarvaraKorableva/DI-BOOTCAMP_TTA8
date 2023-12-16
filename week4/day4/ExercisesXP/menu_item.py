#Exercise 1 : Restaurant Menu Manager
from ExercisesXP import conn, cur

class MenuItem():
    def __init__(self, item_name, item_price = 0):
        self.item_name = item_name
        self.item_price = item_price

    def save(self):
        insert_query = 'INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)'
        data_to_insert = (self.item_name, self.item_price)
        try:
            cur.execute(insert_query, data_to_insert)
            conn.commit()
            return 'Item was added successfully'
        except Exception as e:
            return f"Error during save: {e}"


    def delete(self):
        try:
            cur.execute(f"DELETE FROM Menu_Items WHERE item_name='{self.item_name}'")
            conn.commit()
            return 'Item was deleted successfully'
        except Exception as e:
            return f"Item wasn't deleted because: {e}"


    def update(self, new_name, new_price):
        update_query = f"UPDATE Menu_Items SET item_name='{new_name}', item_price='{new_price}' WHERE item_name='{self.item_name}' AND item_price='{self.item_price}'"
        #new_value = (new_name, new_price, self.item_name)
        try:
            cur.execute(update_query) 
            conn.commit()
            return 'Item was updated successfully'
        except Exception as e:
            return f"Item wasn't updated because: {e}"

   
      
'''item = MenuItem('Burger', 35)
item.save()

item.delete()
item.update('Veggie Burger', 37)
cur.close()
conn.close() '''