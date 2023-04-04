const express = require('express');
const HotelModel = require('../models/hotel');

const getAllHotels= async(request, response) => {
    try {

        let data = await HotelModel.find();

        return response.status(200).json({
            message: "Successfully fetched the hotels!",
            data
        })

    }catch(error){
        return response.status(500).json({
            message: "There was an error",
            error
        })
    }
}

const createHotel = async(request, response) => {
    try {
        const body = request.body;
        const newHotel = new HotelModel(body);
        const hotelData = await newHotel.save();
        return response.status(201).json({
            message: "Hotel sucesfully created",
            hotelData
        })
    } catch (error) {
        return response.status(500).json({
            message: "There was an error",
            error
        })
    }
}


const updateHotel = async(request, response) => {
    const id = request.params.id;
    const incomingData = request.body
    
    try{

        let hotelData = await HotelModel.findByIdAndUpdate(id, incomingData, {returnOriginal: false});

        return response.status(200).json({
            message: `Successfully updated the hotel information!`,
            data: hotelData
        })
    }catch(error){
        return response.status(500).json({
            message: `There was an error`
        })
    }
}

const deleteHotel = async(request, response) => {
    const id = request.parms.id;

    try{

        let hotelData = await HotelModel.findByIdAndDelete(id);

        return response.status(200).json({
            message:   `Successfully deleted the hotel`
        })

    }catch(error){
        return response.status(500).json({
            message: `There was an error`,
            error
        })
    }
}

module.exports = {
    getAllHotels,
    createHotel,
    deleteHotel,
    updateHotel
}