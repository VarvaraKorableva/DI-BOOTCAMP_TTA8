'''
Instructions
The game is played on a grid that’s 3 squares by 3 squares.
Players take turns putting their marks (O or X) in empty squares.

The first player to get 3 of their marks in a row (up, down, across, or diagonally) is the winner.
When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.


Hint
To do this project, you basically need to create four functions:

display_board() – To display the Tic Tac Toe board (GUI).
player_input(player) – To get the position from the player.
check_win() – To check whether there is a winner or not.
play() – The main function, which calls all the functions created above.
Note: The 4 functions above are just an example. You can implement many more 
helper functions or choose a completely different appoach if you want.



Tips : Consider The Following:
What functionality will need to accur every turn to make this program work?
After contemplating the question above, think about splitting your code into smaller pieces (functions).
Remember to follow the single responsibility principle! each function should do one thing and do it well!
'''

board = [
    ['*', '*', '*', '*', '*', '*', '*', '*', '*','*', '*', '*','*', '*', '*','*', '*'],
    ['*', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ',' ', '|', ' ',' ', ' ', ' ',' ', '*'],
    ['*', ' ', ' ', '-', '-', '-', '|', '-', '-','-', '|', '-','-', '-', ' ',' ', '*'],
    ['*', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ',' ', '|', ' ',' ', ' ', ' ',' ', '*'],
    ['*', ' ', ' ', '-', '-', '-', '|', '-', '-','-', '|', '-','-', '-', ' ',' ', '*'],
    ['*', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ',' ', '|', ' ',' ', ' ', ' ',' ', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*', '*','*', '*', '*','*', '*', '*','*', '*']
]

def display_board(board):
    
    for i in board:
        for j in i:
            if j == " ":
                print(" ", end='')
            elif j == "*":
                print("*", end='')
            elif j == "-":
                print("-", end='')
            elif j == "X":
                print("X", end='') 
            elif j == "0":
                print("0", end='')       
            elif j ==("|"):
                print("|", end='')   
        print('')   
      

def player_input(player):
    player_enter_row = int(input(f'Player {player}, input row (from 1 to 3):'))  
    player_enter_column = int(input(f'Player {player}, input column (from 1 to 3):'))

    return player_enter_row, player_enter_column   

def find_place_func(row, column, player, board):
    if row == 1  and column == 1:
        board[1][4] = player
        display_board(board)
    elif row == 1  and column == 2:  
        board[1][8] = player 
        display_board(board) 
    elif row == 1  and column == 3:  
        board[1][12] = player 
        display_board(board)  
    elif row == 2  and column == 1:  
        board[3][4] = player 
        display_board(board)  
    elif row == 2  and column == 2:  
        board[3][8] = player 
        display_board(board) 
    elif row == 2  and column == 3:  
        board[3][12] = player 
        display_board(board)      
    elif row == 3  and column == 1:  
        board[5][4] = player 
        display_board(board)    
    elif row == 3  and column == 2:  
        board[5][8] = player 
        display_board(board)
    elif row == 3  and column == 3:  
        board[5][12] = player 
        display_board(board) 


def check_win(board):
    for i in range(1, 6, 2):
        if board[i].count("X") == 3 or board[i].count("0") == 3:
            return True
    for i in range(4, 13, 4):
        vertical_l = []
        for j in range(1, 6, 2):
            vertical_l.append(board[j][i])

        if vertical_l.count("X") == 3 or vertical_l.count("0") == 3:
            return True 
    
    if (board[1][4] == "X" and  board[3][8] == "X" and board[5][12] == "X") or (board[1][4] == "0" and  board[3][8] == "0" and board[5][12] == "0"):
        return True
    elif (board[1][12] == "X" and  board[3][8] == "X" and board[5][4] == "X") or (board[1][12] == "0" and  board[3][8] == "0" and board[5][4] == "0"):
        return True

def main(board):
    print('Welcome to tic tac toe')
    player = 'X'
    win = False
    display_board(board)

    while not(win):
        row, column = player_input(player)
        find_place_func(row, column, player, board)
        win = check_win(board)

        if win:
            break

        if player == 'X':
            player = '0'
        else:
            player = 'X' 
        

    if win == True:
        print(f"Game over! Player {player} is winner!")
        

main(board)