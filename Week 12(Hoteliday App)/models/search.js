const mongoose = require("mongoose")
const SearchScheme = mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
},{ 
    timestamps: true
})

const SearchModel = mongoose.model('Search', SearchScheme);
module.exports = SearchModel;