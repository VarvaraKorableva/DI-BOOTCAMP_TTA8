const {data} = require('./data/data')
const express = require('express')
const bp = require('body-parser')
const app = express()
app.use(bp.urlencoded({extended:true}))
app.use(bp.json())

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

app.post("/posts", (req, res) => {
    const newPost = {
      id: data.length + 1,
      title: req.body.title,
      content: req.body.content,
    };
    data.push(newPost);
    res.status(201).json(newPost);
  });

app.put("/posts/:postsId", (req, res) => {
    const id = Number(req.params.postsId);
    const index = data.findIndex((post) => post.id === id);
    if (index === -1) {
      return res.status(404).send("Post not found");
    }
    const updatedPost = {
      id: data[index].id,
      title: req.body.title,
      content: req.body.content,
    };
    data[index] = updatedPost;
    res.status(200).json("Post updated");
});  

app.delete("/posts/:postsId", (req, res) => {
    const id = Number(req.params.postsId);
    const index = data.findIndex((post) => post.id === id);
    if (index === -1) {
      return res.status(404).send("Post not found");
    }
    data.splice(index, 1);
    res.status(200).json("Post deleted");
});  