class AnagramChecker():
    def __init__(self, text_file):
        self.text = text_file
        self.word_l = []

    def from_file(self):
        with open (self.text,'r') as f:
            self.word_l = f.read()
            return self.word_l

    def is_valid_word(self, word):
        valid_words = self.from_file()
        if word.upper() in valid_words:
            return True

    def get_anagrams(self, word):
        is_valid = self.is_valid_word(word)
        if is_valid:
            valid_words = self.from_file()
            valid_words_l = valid_words.split('\n')
            equal_length_l = []
            list_of_lists = [] #[['A','P','P','L','E'], ['P', ...]]
            finish_l = []
            our_word = list(word)

            for i in valid_words_l:
                if len(i) == len(word):
                    equal_length_l.append(i.lower())
            for i in equal_length_l:
                list_of_lists.append(list(i))
        
            for i in list_of_lists:
                if sorted(our_word) == sorted(i):
                    if i == our_word:
                        continue
                    else:
                        finish_l.append(''.join(i))

            if len(finish_l):          
                to_return_inscription = [f'YOUR WORD: "{word.upper()}"', 'this is a valid English word.', f"Anagrams for your word: {', '.join(finish_l)}"]      
                for i in to_return_inscription:   
                    print(i) 
            else:
                to_return_inscription = [f'YOUR WORD: "{word.upper()}"', 'this is a valid English word.', "There are no anagrams for your word."]      
                for i in to_return_inscription:   
                    print(i) 
        else:
            raise ValueError('Not a valid word')


text = AnagramChecker('norvig.com_ngrams_sowpods.txt')

#print(text.get_anagrams('juice'))
