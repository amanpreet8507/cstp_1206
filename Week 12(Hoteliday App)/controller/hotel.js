const HOtelModel = require('../models/hotel');


const createHotel =  async (req, res) => {
    const incomingData = req.body;
    console.log(incomingData, "incoming");
    const newHotel = new HotelModel({
        name: incomingData.name,
        description: incomingData.description,
        employee: incomingData.employee
    })

    try {
        const response = await newHotel.save();
        res.status(201).json({
            message: "Hotel Succesfully Created",
            data: response
        })
    } catch(error) {
        res.status(500).json({
            message: "There was an error",
            error
        })
    }

} 

const getAllHotels = async (req, res) => {
    try {
        const hotelData = await HotelModel.find();
        return res.status(200).json({
            message: "Succesfully Fetched the hotels",
            data: hotelData
        })
    } catch (error) {
        res.status(500).json({
            message: "There was an error",
            error
        })
    }
}

const getHotelById = async (req, res) => {
    const id = req.params.id;
    

    try {
        const hotelData = await HotelModel.findById(id);
                
        if (hotelData) {
            return res.status(200).json({
                message: `Succesfully Fetched the Hotel:  ${hotelData.name}`,
                data: hotelData
            })
        }

        return res.status(404).json({
            message: "Hotel Does not Exist",
        })
    } catch (error) {
        res.status(500).json({
            message: "There was an error",
            error
        })
    }
}

const deleteHotel = async (req, res) => {
    const id = req.params.id;

    try {
        await HotelModel.findByIdAndDelete(id);
        return res.status(200).json({
            message: `Succesfully removed the Hotel`,
        })
    } catch (error) {
        res.status(500).json({
            message: "There was an error",
            error
        })
    }
}

module.exports = {
    createHotel,
    getAllHotels,
    getHotelById,
    deleteHotel
}
