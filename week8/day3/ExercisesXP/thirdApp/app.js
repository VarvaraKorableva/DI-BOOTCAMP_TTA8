const express = require('express')
const app = express()
const allRoutes = require('./routes/books.js')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/books', allRoutes)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});