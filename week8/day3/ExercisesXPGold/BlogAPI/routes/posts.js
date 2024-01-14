const express = require('express')
const router = express.Router()

const posts = [
    {
        title: "someTitle", 
        content: "something to content", 
        timestamp: '2024-04-10T12:30:00.000Z'
    },
    {
        title: "secondTitle", 
        content: "something to content second", 
        timestamp: '2024-01-05T12:35:00.000Z'
    },

]

router.get('/', (req, res) => {
    res.send(posts);
});

router.get('/:id', (req, res) => {
    try {
        const { id } = (req.params)
        const post = posts.find(item => item.id == id)
        if(!post) return res.status(404).json({message: 'Post not found'})
    
        res.json(post)
    }
    catch (error){
        return res.status(500).json({message: 'Post not found'})
    }
});

router.post('/', (req, res) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
        content: req.body.content,
        timestamp: new Date().toISOString()
    }
    posts.push(newPost);
      res.status(201).json(newPost);
});

router.put("/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = posts.findIndex((post) => post.id === id);
    if (index === -1) {
      return res.status(404).send("Post not found");
    }
    const updatedPost = {
      id: posts[index].id,
      title: req.body.title,
      content: req.body.content,
      timestamp: new Date().toISOString()
    };
    posts[index] = updatedPost;
    res.status(200).json("Post updated");
});  

router.delete("/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = posts.findIndex((post) => post.id === id);
    if (index === -1) {
      return res.status(404).send("Post not found");
    }
    posts.splice(index, 1);
    res.status(200).json("Post deleted");
});  

module.exports = router;