const SearchModel = require('../models/seach');


const createSearch =  async (req, res) => {
    const incomingData = req.body;
    //console.log(incomingData, "incoming");
    const newSeaarch = new SearchModel({
        name: incomingData.name,
        description: incomingData.description,
        employee: incomingData.employee
    })

    try {
        const response = await newHotel.save();
        res.status(201).json({
            message: "Search Succesfully Created",
            data: response
        })
    } catch(error) {
        res.status(500).json({
            message: "There was an error",
            error
        })
    }

} 



module.exports = {
    createSearch
}
