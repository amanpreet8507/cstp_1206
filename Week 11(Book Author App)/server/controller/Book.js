const BookModel = require('../models/Book');

const createBook = async(req, res) => {
    const incomingData = req.body;
 
    const newBook = new BookModel({
    title: incomingData.title,
    description: incomingData.description,
    author: incomingData.author       
 })

 try {
    const response = await newBook.save();
    return res.status(200).json({
        message: "Book Created Successfully!",
        data: response
    })
 } catch (error){
    res.status(500).json({
        message: "There is an error",
        error
    })
 }
}

const getBookById = async(req, res) => {
    const id = req.params.id;
 
    try{
        const bookData = await BookModel.findById(id);
        if(bookData){
            return res.status(200).json({
                message: `Successfully fetched the book ${bookData.name}`,
                data: bookData
            })
        }
        return res.status(404).json({
            message: "Book does not exist!"
        })
    } catch (error) {
        res.status(500).json({
            message: "There is an error",
            error
        })
    }
}

const deleteBook = async (req, res) => {
    const id = req.params.id;

    try{
        await BookModel.findByIdAndDelete(id);
        return res.status(200).json({
            message: "Successfully deleted the book!!!"
        })
    } catch(error) {
        res.status(500).json({
            message: "There is an error",
            error
        })
    }
} 

const getAllBooks = async (req, res) => {
    const id = req.params.id;

    try {
        const bookData = await BookModel.find();

        return res.status(200).json({
            message: "Successfully fetched All Books!",
            data: bookData
        })
    } catch (error) {
        res.status(200).json({
            message: "There is an error!",
            error
        })
    }
}


module.exports = {
    createBook,
    getBookById,
    deleteBook,
    getAllBooks
}