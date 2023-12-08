import re
from anagram_checker import AnagramChecker

def valid_word_func():
    word = ''
    while word != 'EXIT':
        if word == 'EXIT':
            break

        word = input('''If you want to exit, enter EXIT (in capital letters).
        if you want to try your word, enter one word here:''')

        for i in word.strip():
            if i == " ":
                print ('You need to input only one word')
            elif bool(re.match("^[a-zA-Z]+$", i)):
                return word
            else:
                print("Please, don't write any special characters or numbers")
    return word         

valid_word = valid_word_func() 

text = AnagramChecker('norvig.com_ngrams_sowpods.txt')

text.get_anagrams(valid_word)
