const express = require("express");
const {
  getAllBooks,
  getBook,
  addBook,
  updateBook,
  deleteBook,
} = require("../controllers/books.controller.js");

const books_router = express.Router();

books_router.get("/", getAllBooks);
books_router.get("/:id", getBook);
books_router.post("/", addBook);
books_router.put("/:id", updateBook);
books_router.delete("/:id", deleteBook);

module.exports = {
    books_router,
};
