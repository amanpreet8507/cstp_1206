const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors')
const morgan = require('morgan');
const PORT = 4000;
const AuthorRoute = require('./routes/authorRoute');
const BookRoute = require('./routes/bookRoute');
require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

mongoose.connect(process.env.MONGODB_URL).then((response) => {
    console.log(`Datebse Connected`+ response);
}).catch((error) => {
    console.log(`There is an error` + error);
})

//Intial function
app.get('/', (req, res) => {
    return res.send('Endpoints fo Book Author App');
})

//AUTHOR ROUTES
//Middleware!
app.use('/api/v1/author', AuthorRoute);


//BOOK ROUTES
app.use('/api/v1/book', BookRoute);


app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})