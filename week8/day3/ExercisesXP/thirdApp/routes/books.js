const express = require('express')
const router = express.Router()

const books = []

router.get('/', (req, res) => {
    res.send(books);
});

router.get('/:id', (req, res) => {
    try {
        const { id } = (req.params)
        const book = books.find(item => item.id == id)
        if(!book) return res.status(404).json({message: 'Book not found'})
    
        res.json(book)
    }
    catch (error){
        return res.status(500).json({message: 'Book not found'})
    }
});

router.post('/', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
    }
    books.push(newBook);
      res.status(201).json(newBook);
});

router.put("/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = books.findIndex((book) => book.id === id);
    if (index === -1) {
      return res.status(404).send("Book not found");
    }
    const updatedBook = {
      id: books[index].id,
      title: req.body.title,
      author: req.body.author,
    };
    books[index] = updatedBook;
    res.status(200).json("Book updated");
});  

router.delete("/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = books.findIndex((book) => book.id === id);
    if (index === -1) {
      return res.status(404).send("Book not found");
    }
    books.splice(index, 1);
    res.status(200).json("Book deleted");
});  

module.exports = router;