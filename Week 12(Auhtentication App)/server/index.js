//const { response } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require ('morgan');
require('dotenv').config();
const PORT = 4500;
const app = express();
const userRoutes = require('./routes/user')

app.use(morgan('dev'));

//is used for parsing json
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL).then((response) => {
    console.log('Database connected!')
}).catch((error) => {
    console.log(error);
})

app.get('/',(req, res) => {
    return res.send('Endpoints for Authenication API in get function!')
})

//USERS!!
app.use('/api/v1/users', userRoutes);



app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})

