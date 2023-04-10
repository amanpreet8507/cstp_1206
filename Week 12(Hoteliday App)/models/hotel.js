const mongoose = require('mongoose');

const HotelSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        required: true
    }
})

const HotelModel = mongoose.model('Hotel', HotelSchema);

module.exports = HotelModel;
