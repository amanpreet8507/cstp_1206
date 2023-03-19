const AuthorModel = require('../models/Author');

const createAuthor = async(req, res) => {
    const incomingData = req.body;

    const newAuthor = new AuthorModel({
        name: incomingData.name,
        email: incomingData.email,
        contact: incomingData.contact 
    })

    try {
        const response = await newAuthor.save();
        return res.status(201).json({
            message: "Author Successfully Created!",
            data: response
        })
    }catch(error){
        res.status(500).json({
            messsage: "There is an error",
            error
        })
    }
}

const getAllAuthors = async (req, res) => {
    try {
        const authorData = await AuthorModel.find();
        return res.status(200).json({
            message: "Successfully fetched the Authors",
            data: authorData
        })
    }catch(error){
        res.status(500).json({
            message: "There is an error",
            error
        })
    }
}


const getAuthorById = async (req, res) => {
    const id = req.params.id;

    try{
        const authorData = await AuthorModel.findById(id);

        if (authorData) {
            return res.status(200).json({
                message: `Successfully fetched ${authorData.name}`,
                data: authorData
            })
        }
        return res.status(404).json({
            message: "The Author not found!!"
        })

    } catch(error){
        res.status(500).json({
            message: "There is an error",
            error
        })
    }
}

const updateAuthor = async (req, res) => {
    const id = req.params.id;
    const incomingData = req.body;
    try {
        const authorData = AuthorModel.findByIdAndUpdate(id, incomingData, { returnOriginal: false });
        return res.status(200).json({
            message: `Successfully updated the author ${authorData.name}`,
            data: authorData
        })
    } catch (error) {
        res.status(500).json({
            message: "There is an error",
            error
        })
    }
}

const deleteAuthor = async(req, res) => {
    const id = req.params.id;

    try{
        await AuthorModel.findByIdAndDelete(id);
        return res.status(200).json({
            message: `Successfully deleted the author!!!`
        })
    }catch(error){
        res.status(500).json({
            message: "There is an error",
            error
        })
    }
}

module.exports = {
    createAuthor,
    getAllAuthors,
    getAuthorById,
    updateAuthor,
    deleteAuthor
}