from string import ascii_letters
matrix_str = '7iiTsxh%?i #sM $a #t%^r!'
matrix_l = [list(matrix_str[i:i+3]) for i in range(0,len(matrix_str),3)]
'''
for i in range(0,len(matrix_str),3):
    matrix_l.append(list(matrix_str[i:i+3]))
print(matrix_l)    
'''  

result = ''

for i in range(len(matrix_l[0])):
    for j in range(len(matrix_l)):
        if matrix_l[j][i] in ascii_letters or matrix_l[j][i] == ' ':
            result += matrix_l[j][i]
        else:
            result += ' ' 

print(' '.join(result.strip().split()))





