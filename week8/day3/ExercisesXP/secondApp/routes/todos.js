const express = require('express')
const router = express.Router()
const todos = [
    {
        "id": 1,
        "title": "test1",
        "content": "testcontent1"
    },
    {
        "id": 2,
        "title": "test2",
        "content": "testcontent2"
    },
]

router.get('/', (req, res) => {
    res.send(todos);
});

router.get('/:id', (req, res) => {
    try {
        const { id } = (req.params)
        const todo = todos.find(item => item.id == id)
        if(!todo) return res.status(404).json({message: 'Todo not found'})
    
        res.json(todo)
    }
    catch (error){
        return res.status(500).json({message: 'Todo not found'})
    }
});

router.post('/', (req, res) => {
    const newToDo = {
        id: todos.length + 1,
        title: req.body.title,
        content: req.body.content,
    }
    todos.push(newToDo);
      res.status(201).json(newToDo);
});

router.put("/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = todos.findIndex((todo) => todo.id === id);
    if (index === -1) {
      return res.status(404).send("Todo not found");
    }
    const updatedTodo = {
      id: todos[index].id,
      title: req.body.title,
      content: req.body.content,
    };
    todos[index] = updatedTodo;
    res.status(200).json("Todo updated");
});  

router.delete("/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = todos.findIndex((todo) => todo.id === id);
    if (index === -1) {
      return res.status(404).send("Todo not found");
    }
    todos.splice(index, 1);
    res.status(200).json("Todo deleted");
});  

module.exports = router;