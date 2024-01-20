const fs = require('fs/promises')
const path = require('path')

const getAllTasks = async (req, res) => {
  const filePath = path.join(__dirname, 'tasks.json')
    try {
      const data = await fs.readFile(filePath, 'utf8');
      const tasks = JSON.parse(data);
  
      res.json(tasks);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    }
  };

  const createTask = async (req, res) => {
    const filePath = path.join(__dirname, 'tasks.json');
    
    try {
      const data = await fs.readFile(filePath, 'utf8');
      const tasks = JSON.parse(data);
  
      const newTask = {
        id: tasks.length + 1,
        name: req.body.name, // Используйте данные из тела запроса
        content: req.body.content, // Используйте данные из тела запроса
      };
  
      tasks.push(newTask);
  
      await fs.writeFile(filePath, JSON.stringify(tasks, null, 2), 'utf8');
  
      res.json(newTask);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    }
  };

  const getTaskById = async (req, res) => {
    const taskId = parseInt(req.params.id)
  
    if (isNaN(taskId)) {
      return res.status(400).json({ error: 'Invalid task ID' });
    }
  
    const filePath = path.join(__dirname, 'tasks.json');
  
    try {
      const data = await fs.readFile(filePath, 'utf8');
      const tasks = JSON.parse(data);
  
      const task = tasks.find(task => task.id === taskId);
  
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
  
      res.json(task);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    }
  };

  const updateTaskById = async (req, res) => {
    
    const taskId = parseInt(req.params.id)
    
    if (isNaN(taskId)) {
      return res.status(400).json({ error: 'Invalid task ID' });
    }
  
    const filePath = path.join(__dirname, 'tasks.json');
  
    try {
      const data = await fs.readFile(filePath, 'utf8');
      let tasks = JSON.parse(data);
  
      const taskIndex = tasks.findIndex(task => task.id === taskId);
  
      if (taskIndex === -1) {
        return res.status(404).json({ error: 'Task not found' });
      }
  
      tasks[taskIndex] = {
        ...tasks[taskIndex],
        ...req.body,
        id: taskId,
      };
  
      await fs.writeFile(filePath, JSON.stringify(tasks, null, 2), 'utf8');
  
      res.json(tasks[taskIndex]);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    }
  };  

  const deleteTaskById = async (req, res) => {
    const taskId = parseInt(req.params.id)
  
    if (isNaN(taskId)) {
      return res.status(400).json({ error: 'Invalid task ID' });
    }
  
    const filePath = path.join(__dirname, 'tasks.json');
  
    try {
      const data = await fs.readFile(filePath, 'utf8');
      let tasks = JSON.parse(data);
  
      const updatedTasks = tasks.filter(task => task.id !== taskId);
  
      if (updatedTasks.length === tasks.length) {
        return res.status(404).json({ error: 'Task not found' });
      }
  
      await fs.writeFile(filePath, JSON.stringify(updatedTasks, null, 2), 'utf8');
  
      res.json({ message: 'Task deleted successfully' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    }
  };  


  module.exports = {
    getAllTasks,
    createTask,
    getTaskById,
    updateTaskById,
    deleteTaskById
  };  