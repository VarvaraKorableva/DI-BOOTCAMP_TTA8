const {
    _getAllBooks,
    _getBook,
    _addBook,
    _updateBook,
    _deleteBook,
  } = require("../models/models.books");
  
  const getAllBooks = (req, res) => {
    _getAllBooks()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(404).json({ msg: "Not Found" });
      });
  };
  
  const getBook = async (req, res) => {
    const { id } = req.params;
    try {
      const data = await _getBook(id);
      if (data.length === 0)
        return res.status(404).json({ msg: "book not found" });
      res.status(200).json(data);
    } catch (error) {
      return res.status(404).json({ msg: "book not found" });
    }
  };  
  
  const addBook = (req, res) => {
    const { title, author, publishedYear } = req.body;
    _addBook(title, author, publishedYear)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(404).json({ msg: "can not add a book" });
      });
  };
  
  const updateBook = (req, res) => {
    const { id } = req.params;
    const { title, author, publishedYear } = req.body;
    _updateBook(id, title, author, publishedYear)
    .then((data)=> {
      res.json(data)
    }) 
    .catch((err) => {
      res.status(404).json({ msg: "can not update a book" });
    })
  };
  
  const deleteBook = (req, res) => {
    const { id } = req.params;
    _deleteBook(id)
    .then((data)=> {
      res.json(data)
    }) 
    .catch((err) => {
      res.status(404).json({ msg: "can not delete a book" });
    })
  };
  
  module.exports = {
    getAllBooks,
    getBook,
    addBook,
    updateBook,
    deleteBook,
  };
  