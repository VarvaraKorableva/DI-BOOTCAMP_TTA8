const {data} = require('./data/data')
const express = require('express')
const app = express()

app.listen(3000, () => {
    console.log('Server listening on port 3000')
})

app.get("/posts", (request, response) => {
    response.send(data)
})

app.get("/posts/:id", (request, response) => {
    try {
        const { id } = (request.params)
        const post = data.find(item => item.id == id)
        if(!post) return response.status(404).json({message: 'Post not found'})
    
        response.json(post)
    }
    catch (error){
        return response.status(500).json({message: 'Post not found'})
    }
})
