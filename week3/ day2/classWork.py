'''
Try to recreate the class explained below:

We have a class called Door that has an attribute of is_opened 
declared when an instance is initiated.

We can create a class called BlockedDoor that inherits from the base class Door.

We just override the parent class's functions of open_door() and close_door() 
with our own BlockedDoor version of those functions, 
which simply raises an Error that a blocked door cannot be opened or closed.
'''

class Door():
    def __init__(self, is_opened):
        self.is_opened = is_opened

    def open_door(self):
        self.is_opened = True
        print('The door is open')

    def close_door(self):
        self.is_opened = False
        print('The door is close')

class BlockedDoor(Door):
    def open_door(self):
        raise Exception ("Blocked, door can't be open")
    
    def close_door(self):
        raise Exception ("Blocked, door can't be open")

        
new_door = Door(True)     
new_door.open_door()
new_door.close_door()

print(new_door.is_opened)

blocked_Door = BlockedDoor(False)
blocked_Door.open_door()
blocked_Door.close_door()