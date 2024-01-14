const {
  _getAllPosts,
  _getPost,
  _addPost,
  _updatePost,
  _deletePost,
} = require("../models/posts.models");

const getAllPosts = (req, res) => {
  _getAllPosts()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(404).json({ msg: "Not Found" });
    });
};

const getPost = async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  try {
    const data = await _getPost(id);
    if (data.length === 0)
      return res.status(404).json({ msg: "post not found" });
    res.status(200).json(data);
  } catch (error) {
    return res.status(404).json({ msg: "post not found" });
  }
};  

const addPost = (req, res) => {
  console.log(req.body);
  const { title, content } = req.body;
  _addPost(title, content)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(404).json({ msg: "can not add a post" });
    });
};

const updatePost = (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  _updatePost(id, title, content)
  .then((data)=> {
    res.json(data)
  }) 
  .catch((err) => {
    res.status(404).json({ msg: "can not update a post" });
  })
};

const deletePost = (req, res) => {
  const { id } = req.params;
  _deletePost(id)
  .then((data)=> {
    res.json(data)
  }) 
  .catch((err) => {
    res.status(404).json({ msg: "can not delete a post" });
  })
};

module.exports = {
  getAllPosts,
  getPost,
  addPost,
  updatePost,
  deletePost,
};
