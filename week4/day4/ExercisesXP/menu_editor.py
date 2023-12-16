from menu_manager import MenuManager 
from menu_item import MenuItem
from ExercisesXP import cur, conn

def show_user_menu():
    while True:
        print('If you want view an Item enter V,')
        print('If you want add an Item enter A,')
        print('If you want delete an Item enter D,')
        print('If you want update an Item enter U,')
        print('If you want show Menu enter S')

        user_input = input('Enter your choice: ')

        if user_input == 'exit':  
            show_restaurant_menu()
            break
        elif user_input.upper() == 'A':
            add_item_to_menu()
        elif user_input.upper() == 'D':
            remove_item_from_menu()   
        elif user_input.upper() == 'U':  
            update_item_from_menu()  
        elif user_input.upper() == 'S':     
            show_restaurant_menu()
        elif user_input.upper() == 'V': 
            view_an_item()   
        

def add_item_to_menu():
    item_name = input('Please, input the name of food:')
    item_price = int(input('Please, input the price of food:'))
    menu_item = MenuItem(item_name, item_price)
    result = menu_item.save()
    print(result)


def remove_item_from_menu():
    item_to_remove = input("Please enter the name of the dish you want to delete:") 
    menuitem = MenuItem(item_to_remove)
    result = menuitem.delete() 
    print(result)


def update_item_from_menu():
    old_name = input('Please, input the name of the item you want to update:')
    old_price = input('Please, input the price of the item you want to update:')
    name_to_update = input('Please, input the name to update:')
    price_to_update = input('Please, input the price to update:')
    menu_item = MenuItem(old_name, old_price)
    print(menu_item.update(name_to_update, price_to_update))

def show_restaurant_menu():
    print(MenuManager.all())

def view_an_item():  
    name = input('Please, input the name of the item you want to view:')
    item = MenuManager.get_by_name(name)
    print(item)
    

show_user_menu()

cur.close()
conn.close()