const { db } = require("../config/db.js");

const _getAllBooks = () => {
  return db("books")
  .select("*")
  .orderBy("id")
  .catch((error) => {
    throw new Error(`Error fetching all books: ${error.message}`);
  });
};

const _getBook = (id) => {
  return db("books")
  .select("*")
  .where({ id })
  .catch((error) => {
    throw new Error(`Error fetching book with id ${id}: ${error.message}`)
  })
};

const _addBook = (title, author, publishedYear) => {
  return db("books")
  .insert({ title, author, publishedYear })
  .returning("*")
  .catch((error) => {
    throw new Error(`Error adding book: ${error.message}`)
  })
};

const _updateBook = (id, title, author, publishedYear) => {
  return db("books")
  .update({title, author, publishedYear})
  .where({ id })
  .returning("*")
  .catch((error) => {
    throw new Error(`Error updating book with id ${id}: ${error.message}`)
  })
}

const _deleteBook = (id) => {
  return db("books")
  .where({ id })
  .del()
  .returning('*')
  .catch((error) => {
    throw new Error(`Error deleting book with id ${id}: ${error.message}`)
  })
}

module.exports = {
  _getAllBooks,
  _getBook,
  _addBook,
  _updateBook,
  _deleteBook
};
