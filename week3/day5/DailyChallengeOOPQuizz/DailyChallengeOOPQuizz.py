import random

#Part 2: Create A Deck Of Cards Class.

class Card():
    def __init__(self):
        self.l_of_cards = []
        self.suit = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
        self.value = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10,'J','Q','K']

    def create_card(self):
        for i in self.suit:
            for j in self.value:
                card = [i, j]
                self.l_of_cards.append(card)
        return(self.l_of_cards)
            

class Desk():
    def __init__(self, cards_l):
        self.cards_l = cards_l

    def shuffle(self):
        if len(self.cards_l) == 52:
            random.shuffle(self.cards_l)
            return self.cards_l
        else: 
            print('mistake, your must have 52 cards')

    def deal(self):
        return self.cards_l.pop(0)


cards = Card() 
desk = Desk(cards.create_card())

print(desk.shuffle())
print(desk.deal())
