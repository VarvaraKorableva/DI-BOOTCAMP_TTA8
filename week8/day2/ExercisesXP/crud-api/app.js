import { fetchPosts } from './data/dataService.js'
import express from 'express'
const app = express()

app.get('/posts', async (req, res) => {
    try {
      const posts = await fetchPosts()
      res.json(posts)
      console.log('Data has been successfully retrieved and sent as a response!')
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  });

app.listen(5000, () => {
    console.log('Server listening on port 5000')
})