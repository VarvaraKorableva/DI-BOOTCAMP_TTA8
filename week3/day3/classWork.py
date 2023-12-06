'''Given a list of numbers, write a 
function that returns the sum of every number. 
BUT you can have a malicious string inside the list.'''

my_list = [2,3,1,2,"four",42,1,5,3,"imanumber"]

def sum_and_exeptions(my_list):
    try: my_sum = sum(my_list)
    except TypeError:
        print("type error")
    else: 
        print(my_sum)
   

sum_and_exeptions(my_list)