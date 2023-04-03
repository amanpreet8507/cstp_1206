const { response } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 2000;
require('dotenv').config();
const UserModel = require('./models/user');

//So that we can accept json
app.use(express.json());
// We will use a npm package to hide confidential data directly (dot env)
mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Connected to Database");
}).catch((error) => {
    console.log("There was an error.")
})

app.get('/', (req, res) => {
    console.log(UserModel, "Value of User Model");
    res.send('Welcome to home page');
})

//GET API for fetching List of Users!
app.get('/api/users', (req, res) => {
    
    UserModel.find().then((data) => {
        return res.status(200).json({
            result: data,
            message: "Users found successfully!"
        })
    }).catch((error) => {
        return res.status(404).json({
        error,
        message: "There was an error!"
        })
    })
})
 
//POST API for creating a user!
// 201 status code is for creating the data and 200 is for fetching the data
app.post('/api/users', async(req, res)=> {
    const incomingData = req.body;
    const newUser = new UserModel({
        name: incomingData.name,
        email: incomingData.email,
        password: incomingData.password,
        contact: incomingData.contact
    })
   
    try {
        const response = await newUser.send();
        return res.status(201).json({
            message: "Successfully added a user!",
            result: newUser
        })
        
    } catch (error) {
        return res.status(404).json({
            message:"There's an error!",
            error
        })
    }
})

//GET API for particular user for given Id
app.get('/api/users/:id', (req, res) => {
    const id = res.parms.id;
    UserModel.findById(id).then((response) => {

        if(response){
            return res.status(200).json({
                result: response,
                message: "User found successfully!"
            })
        } else {
            return res.status(404).json({
                error,
                message: "Student not found!"
                })
        }
        
    }).catch((error) => {
        return res.status(404).json({
        error,
        message: "There was an error!"
        })
    })
})

//GET API for particular user for given Email
app.get('/api/users/:email', (req, res) => {
    const email = res.parms.email;
    UserModel.findOne(email).then((response) => {

        if(response){
            return res.status(200).json({
                result: response,
                message: "User found successfully!"
            })
        } else {
            return res.status(404).json({
                error,
                message: "Student not found!"
                })
        }
        
    }).catch((error) => {
        return res.status(404).json({
        error,
        message: "There was an error!"
        })
    })
})

//DELETE API for particular user for given Email
app.delete('/api/users/:id', (req, res) => {
    const id = res.parms.id;
    UserModel.findByIdAndDelete(id).then((response) => {

        if(response){
            return res.status(200).json({
                result: response,
                message: "User deleted successfully!"
            })
        } else {
            return res.status(404).json({
                error,
                message: "Student not found!"
                })
        }
        
    }).catch((error) => {
        return res.status(404).json({
        error,
        message: "There was an error!"
        })
    })
})


//PUT API for updating particular user for given Id
app.put('/api/users/:id', (req, res) => {
    const id = res.parms.id;
    const updatedUser = req.body;
    UserModel.findByIdAndUpdate(id, updatedUser, {returnOriginal : false }).then((response) => {

        if(response){
            return res.status(200).json({
                result: response,
                message: "User updated successfully!"
            })
        }
        
    }).catch((error) => {
        return res.status(404).json({
        error,
        message: "There was an error!"
        })
    })
})



app.listen(PORT, (req,res) => {
    console.log(`Server running at ${PORT}`)
})