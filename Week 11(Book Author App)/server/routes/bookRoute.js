const express = require("express");
const router = express.Router();
const BookController = require('../controller/Book.js')

//API's BOOK ROUTES

//Create a book
router.post('/', BookController.createBook);

//Get a Book by id
router.get('/:id', BookController.getBookById);

//Delete a book
router.delete('/:id', BookController.deleteBook);

//Get all books
router.get('/', BookController.getAllBooks);


module.exports = router;