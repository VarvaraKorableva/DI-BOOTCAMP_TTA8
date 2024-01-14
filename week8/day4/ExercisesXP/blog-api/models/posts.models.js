const { db } = require("../config/db.js");

const _getAllPosts = () => {
  return db("posts")
  .select("*")
  .orderBy("id")
  .catch((error) => {
    throw new Error(`Error fetching all posts: ${error.message}`);
  });
};

const _getPost = (id) => {
  return db("posts")
  .select("*")
  .where({ id })
  .catch((error) => {
    throw new Error(`Error fetching post with id ${id}: ${error.message}`)
  })
};

const _addPost = (title, content) => {
  return db("posts")
  .insert({ title, content })
  .returning("*")
  .catch((error) => {
    throw new Error(`Error adding post: ${error.message}`)
  })
};

const _updatePost = (id, title, content) => {
  return db("posts")
  .update({title, content})
  .where({ id })
  .returning("*")
  .catch((error) => {
    throw new Error(`Error updating post with id ${id}: ${error.message}`)
  })
}

const _deletePost = (id) => {
  return db("posts")
  .where({ id })
  .del()
  .returning('*')
  .catch((error) => {
    throw new Error(`Error deleting post with id ${id}: ${error.message}`)
  })
}

module.exports = {
  _getAllPosts,
  _getPost,
  _addPost,
  _updatePost,
  _deletePost
};
