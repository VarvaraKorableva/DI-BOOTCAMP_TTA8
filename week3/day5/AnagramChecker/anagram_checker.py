class AnagramChecker():
    def __init__(self, text_file):
        self.text = text_file
        self.word_l = []

    def __from_file(self):
        with open (self.text,'r') as f:
            self.word_l = f.read()
            return self.word_l

    def is_valid_word(self, word):
        valid_words = self.__from_file()
        if word.upper() in valid_words:
            return True

    def get_anagrams(self, word):
        if self.is_valid_word(word):
            valid_words_l = self.__from_file().split('\n')
            finish_l = []
            sorted_word = sorted(word.upper())
           
            for i in valid_words_l:
                if sorted(i) == sorted_word and i != word.upper():
                    finish_l.append(i.lower())

            return finish_l              
        else:
            return('Not a valid word')


text = AnagramChecker('norvig.com_ngrams_sowpods.txt')
