const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    contact: {
        type: Number
    }
}, {
    timestamps: true
})

const EmployeeModel = mongoose.model('Employee', EmployeeSchema);

module.exports = EmployeeModel;