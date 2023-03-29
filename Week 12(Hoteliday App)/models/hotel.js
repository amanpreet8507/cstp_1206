const mongoose = require("mongoose")
const HotelSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    rating: {
        type: Number
    }
    
},{ 
    timestamps: true
})

const HotelModel = mongoose.model('Hotel', HotelSchema);
module.exports = HotelModel;