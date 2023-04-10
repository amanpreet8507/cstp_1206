const express = require('express');
const router = express.Router();
const HotelController = require('../controller/hotel');

// API's for BOOK ROUTES

// Add a new Hotel
router.post('/', HotelController.createHotel);

// Get a hotel by ID
router.get('/:id', HotelController.getHotelById);


// Delete a hotel
router.delete('/:id', HotelController.deleteHotel);


// Get All Hotels
router.get('/', HotelController.getAllHotels);


module.exports = router;