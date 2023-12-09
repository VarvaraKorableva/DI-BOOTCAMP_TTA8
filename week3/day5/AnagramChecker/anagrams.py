import re
from anagram_checker import AnagramChecker

def valid_word_func():
    text = AnagramChecker('norvig.com_ngrams_sowpods.txt')
    
    while True:
        word = input('If you want to exit, enter EXIT (in capital letters).if you want to try your word, enter one word here:')

        if word == 'EXIT':
            break
        if not bool(re.match("^[a-zA-Z]+$", word)):
            print("Please, don't write any special characters or numbers or spaces")    
        else:
            result = text.get_anagrams(word)  

            if type(result) is str:
                print(result)

            elif len(result):          
                to_return_inscription = [f'YOUR WORD: "{word.upper()}"', 'this is a valid English word.', f"Anagrams for your word: {', '.join(result)}"]      
                for i in to_return_inscription:   
                    print(i) 
            else:
                to_return_inscription = [f'YOUR WORD: "{word.upper()}"', 'this is a valid English word.', "There are no anagrams for your word."]      
                for i in to_return_inscription:   
                    print(i)          
       

valid_word_func()
