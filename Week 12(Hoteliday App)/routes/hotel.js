const express = require("express");
const router = express.Router();
const HotelController = require('../controller/hotel')

router.get('/', HotelController.getAllHotels);


router.put('/', HotelController.updateHotel);


router.delete('/:id', HotelController.deleteHotel);


router.post('/', HotelController.createHotel);



module.exports = router;