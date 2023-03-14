const express = require("express");
const mongoose = require("mongoose");
const app = express()
const PORT = 2000;

mongoose.connect("mongodb+srv://amanpreet8507:<password>@cluster0.ewntmun.mongodb.net/?retryWrites=true&w=majority",  (error) => {
    if(error) {
        console.log("There was an error : " + error);
    }
})

app.get('/', (req, res) => {
    res.send('Welcome to home page');
})

app.listen(PORT, (req,res) => {
    console.log(`Server running at ${PORT}`)
})