const express = require("express");
const {
  getAllPosts,
  getPost,
  addPost,
  updatePost,
  deletePost,
} = require("../controllers/posts.controller.js");

const posts_router = express.Router();

posts_router.get("/", getAllPosts);
posts_router.get("/:id", getPost);
posts_router.post("/", addPost);
posts_router.put("/:id", updatePost);
posts_router.delete("/:id", deletePost);

module.exports = {
    posts_router,
};
