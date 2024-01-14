const express = require('express')
const app =  express()
const allRoutes = require('./routes/posts')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/posts', allRoutes)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});