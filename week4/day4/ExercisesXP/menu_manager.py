import psycopg2
from ExercisesXP import conn, cur

class MenuManager():
    def __init__(self):
        pass

    @staticmethod
    def get_by_name(name):
        cur.execute('SELECT * FROM Menu_Items WHERE item_name=%s', (name,))
        rows = cur.fetchone()

        if rows == None:
            return None
        else:
            return rows
        
    @staticmethod
    def all():
        cur.execute('SELECT * FROM Menu_Items')
        rows = cur.fetchall()
        return rows 

#item2 = MenuManager.get_by_name('Beef Stew')
#items = MenuManager.all()

