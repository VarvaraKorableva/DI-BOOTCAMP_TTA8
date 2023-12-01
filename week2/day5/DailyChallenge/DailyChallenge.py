#Challenge 1 : Sorting
"""
Write a program that accepts a comma separated sequence 
of words as input and prints the words in a comma-separated 
sequence after sorting them alphabetically.
Use List Comprehension
Example:

Suppose the following input is supplied to the program: without,hello,bag,world
Then, the output should be: bag,hello,without,world
"""
def sorting_fanc(arg):
    ''' 
    l = arg.split(',')
    sort_l = sorted(l)
    ''.join(sort_l)
    '''
    l = ','.join(sorted(arg.split(',')))

    return l

#Challenge 2 : Longest Word
"""
Write a function that finds the longest word in a sentence. 
If two or more words are found, return the first longest word.
Characters such as apostrophe, comma, period count as part of the word 
(e.g. O’Connor is 8 characters long).
Examples

longest_word("Margaret's toy is a pretty doll.") ➞ "Margaret's"

longest_word("A thing of beauty is a joy forever.") ➞ "forever."

longest_word("Forgetfulness is by all means powerless!") ➞ "Forgetfulness"
"""

def longest_result_fanc(sentence):
    longest_word = {len(i) : i for i in reversed(sentence.split())}
    return longest_word[max(longest_word)]

    
print(longest_result_fanc("Margaret's toy is a pretty doll."))