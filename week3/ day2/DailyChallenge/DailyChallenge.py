class Pagination():
    def __init__(self, items = None, pageSize = 10):
        self.items = items
        self.pageSize = pageSize
        self.currentPage = 0
        self.totalPages = int(len(self.items) / self.pageSize)

    def getVisibleItems(self):  
        current_page_l = []
        #задать начало и задать конец
        start = self.currentPage * self.pageSize
        end = min((self.currentPage + 1) * self.pageSize, len(self.items))
        current_page_l = self.items[start:end]
        print(current_page_l)
    
    def nextPage(self):
        if self.currentPage == self.totalPages:
           print('You are on the last page')
           return self
        else:
           self.currentPage += 1
           return self
    
    def prevPage(self):
        if self.currentPage == 0:
            print('You are on the first page')
            return self
        else: 
            self.currentPage -= 1
            return self

    def firstPage(self):
        self.currentPage = 0
        return self

    def lastPage(self):
        self.currentPage = self.totalPages
        return self

    def goToPage(self, pageNum):
        if pageNum > self.totalPages:
           self.lastPage()
        elif pageNum < 2:
           self.firstPage() 
        else:   
           self.currentPage = pageNum
        return self

    
alphabetList = list("abcdefghijklmnopqrstuvwxyz")

p = Pagination(alphabetList, 4)   


p.getVisibleItems()

p.nextPage().nextPage().nextPage().nextPage()
p.getVisibleItems()

p.prevPage()
p.getVisibleItems()

p.goToPage(1)
p.getVisibleItems()

p.lastPage()
p.getVisibleItems()

p.firstPage()
p.getVisibleItems()

p.prevPage()
p.getVisibleItems()

p.nextPage().nextPage().nextPage().nextPage().nextPage().nextPage().nextPage()
p.getVisibleItems()

p.prevPage()
p.getVisibleItems()

p.prevPage().prevPage().prevPage().prevPage().prevPage().prevPage()
p.getVisibleItems()







