const mongoose = require("mongoose");
const BookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
}, {
    timestamps: true
})

const BookModel = mongoose.model('Book', BookSchema);

module.exports = BookModel;