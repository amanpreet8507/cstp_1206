const express = require('express');
const router = express.Router();
const UserController = require('../controller/user')
//LOGIN API!
router.post('/', UserController.loginUser);


//SIGNUP API!
router.post('/', UserController.registerUser);


//DELETE USER!
router.delete('/', UserController.deleteUser);


//UPDATE USER!
router.put('/', UserController.updateUser);


//GET USER BY ID!
router.get('/', UserController.getUserById);


//GET ALL USERS!
router.get('/', UserController.getAllUsers);


module.exports = router;
