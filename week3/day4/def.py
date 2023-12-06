'''Read the file line by line
Read only the 5th line of the file
Read only the 5 first characters of the file
Read all the file and return it as a list of strings. Then split each word
Find out how many occurences of the names "Darth", "Luke" and "Lea" are in the file
Append your first name at the end of the file
Append "SkyWalker" next to each first name "Luke"
'''


with open ('classWork.py','r') as f:
    file_text = f.readlines()
    print(file_text)

print (file_text[4])
print(file_text[:5])    

for i, line in enumerate(file_text, start = 1): 
    if i == 5: print(line)


    
    
read_file('classWork.txt')