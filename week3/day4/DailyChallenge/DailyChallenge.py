from collections import Counter
import string
import re
#Daily Challenge : Text Analysis

class Text():
    def __init__(self, text):
        self.text = text

    def count_frequency_def(self, word):
        frequency = self.text.lower().split().count(word)
        if frequency > 0: 
            return f"Frequency is {frequency} times."
        else:
            return None
        
    def most_common_word(self):
        word_counter = Counter(self.text.lower().split())
        most_common_word = word_counter.most_common(1) 
        return most_common_word

    def unique(self):
        unique_words = list(set(self.text.lower().split()))
        return unique_words  

    @classmethod
    def from_file(cls, file_text):
        with open (file_text,'r') as f:
            string = f.read()
            return cls(string)

class TextModification(Text):

    def delete_punctuation(self):
        x = " "
        y = " "
        z = string.punctuation
        clean_text = self.text.translate(str.maketrans(x, y, z))
        return clean_text
    
    def delete_stopword(self):
        clean_l = self.delete_punctuation().split()
        STOP_WORDS = ['i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 
                      'you', "you're", "you've", "you'll", "you'd", 'your', 'yours', 
                      'yourself', 'yourselves', 'he', 'him', 'his', 'himself', 'she', 
                      "she's", 'her', 'hers', 'herself', 'it', "it's", 'its', 'itself', 
                      'they', 'them', 'their', 'theirs', 'themselves', 'what', 'which', 
                      'who', 'whom', 'this', 'that', "that'll", 'these', 'those', 'am', 
                      'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 
                      'had', 'having', 'do', 'does', 'did', 'doing', 'a', 'an', 'the', 
                      'and', 'but', 'if', 'or', 'because', 'as', 'until', 'while', 'of', 
                      'at', 'by', 'for', 'with', 'about', 'against', 'between', 'into', 
                      'through', 'during', 'before', 'after', 'above', 'below', 'to', 
                      'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 
                      'again', 'further', 'then', 'once', 'here', 'there', 'when', 'where', 
                      'why', 'how', 'all', 'any', 'both', 'each', 'few', 'more', 'most', 
                      'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 
                      'so', 'than', 'too', 'very', 's', 't', 'can', 'will', 'just', 'don', 
                      "don't", 'should', "should've", 'now', 'd', 'll', 'm', 'o', 're', 've',
                      'y', 'ain', 'aren', "aren't", 'couldn', "couldn't", 'didn', "didn't", 
                      'doesn', "doesn't", 'hadn', "hadn't", 'hasn', "hasn't", 'haven',
                      "haven't", 'isn', "isn't", 'ma', 'mightn', "mightn't", 'mustn', 
                      "mustn't", 'needn', "needn't", 'shan', "shan't", 'shouldn', 
                      "shouldn't", 'wasn', "wasn't", 'weren', "weren't", 'won', "won't", 
                      'wouldn', "wouldn't"]
        new_clean_l = []
        for i in clean_l:
            if i in STOP_WORDS:
                continue
            else:
                new_clean_l.append(i)
        clean_str = ' '.join(new_clean_l)        
        return clean_str
        
    def delete_special_characters(self):
        clean_l = self.delete_punctuation()
        text_without_special_chars = re.sub(r'[^a-zA-Z0-9\s]', '', clean_l)
        
        return text_without_special_chars



            
        
            
  
the_stranger = Text.from_file('the_stranger.txt')

print(the_stranger.most_common_word())
print(the_stranger.count_frequency_def('in'))

test = TextModification('bghdwf }she it{ [he and there')

print(test.delete_special_characters())
