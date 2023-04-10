const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');
const cors = require('cors')
require('dotenv').config();
const PORT = 2400;
const app = express();

const userRoutes = require('./routes/user');
const employeeRoutes = require('./routes/employee');
const hotelRoutes = require('./routes/hotel')


app.use(morgan('dev'));
app.use(express.json());
app.use(cors());


// Send UI from the server
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URL).then((response) => {
    console.log(`Database Connected`);
}).catch((error) => {
    console.log(`There was an error` + error);
})

 app.get('/', (req, res) => {
     return res.send("ENDPOINTS FOR AUTHENTICATION APP!");
 })


// Admin 
app.use('/api/v1/users', userRoutes);

//Employees
app.use('/api/v1/employee', employeeRoutes);

//Hotel
app.use('/api/v1/hotel', hotelRoutes);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})