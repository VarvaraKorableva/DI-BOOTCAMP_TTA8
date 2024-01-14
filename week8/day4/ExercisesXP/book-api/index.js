const express = require('express')
const app = express()

const {books_router} = require('./routes/books.js')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/books', books_router)

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});