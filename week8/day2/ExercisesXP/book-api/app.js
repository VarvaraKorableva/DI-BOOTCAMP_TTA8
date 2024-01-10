const {data} = require('./data')
const express = require('express')
const app = express()
const bp = require('body-parser')
app.use(bp.urlencoded({extended:true}))
app.use(bp.json())


app.listen(5000, () => {
    console.log('Server listening on port 5000')
})

app.get("/api/books", (request, response) => {
    response.status(200).json(data);
})


app.get("/api/books/:bookId", (request, response) => {
    try {
        const { bookId } = (request.params)
        const book = data.find(item => item.id == bookId)
        if (!book) {
            return response.status(404).json({ message: 'Book not found' })
        }
        response.status(200).json(book)
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Server error', error: error.message })
    }
});

app.post("/api/books", (req, res) => {
    const newBook = {
      id: data.length + 1,
      title: req.body.title,
      author: req.body.author,
      publishedYear: req.body.publishedYear,
    };
    data.push(newBook);
    res.status(201).json(newBook);
  });


