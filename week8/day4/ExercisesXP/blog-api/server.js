const express = require('express')
const app = express()

const {posts_router} = require('./routes/posts.js')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/posts', posts_router)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});