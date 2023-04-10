const EmployeeModel = require('../models/employee');

const createEmployee =  async (req, res) => {
    const incomingData = req.body;
    console.log(incomingData, "INCOMING DATA");
    const newAuthor = new EmployeeModel({
        name: incomingData.name,
        email: incomingData.email,
        contact: incomingData.contact
    })

    try {
        const response = await newEmployee.save();
        res.status(201).json({
            message: "Employee Succesfully Created",
            data: response
        })
    } catch(error) {
        res.status(500).json({
            message: "There was an error",
            error
        })
    }

}   

const getAllEmployees = async (req, res) => {
    try {
        const employeeData = await EmployeeModel.find();
        return res.status(200).json({
            message: "Succesfully Fetched the Emloyees",
            data: employeeData
        })
    } catch (error) {
        res.status(500).json({
            message: "There was an error",
            error
        })
    }
}

const getEmployeeById = async (req, res) => {
    const id = req.params.id;
    

    try {
        const employeeData = await EmployeeModel.findById(id);
                
        if (employeeData) {
            return res.status(200).json({
                message: `Succesfully Fetched the Employee ${employeeData.name}`,
                data: employeeData
            })
        }

        return res.status(404).json({
            message: "Employee Does not Exist",
        })
    } catch (error) {
        res.status(500).json({
            message: "There was an error",
            error
        })
    }
}


const updateEmployee = async (req, res) => {
    const id = req.params.id;
    const incomingData = req.body;

    try {   
        const employeeData = await EmployeeModel.findByIdAndUpdate(id, incomingData, { returnOriginal: false });
        return res.status(200).json({
            message: `Succesfully Updated the Employee ${employeeData.name}`,
            data: authorData
        })
    } catch (error) {
        res.status(500).json({
            message: "There was an error",
            error
        })
    }
}

const deleteEmployee = async (req, res) => {
    const id = req.params.id;

    try {
        await EmployeeModel.findByIdAndDelete(id);
        return res.status(200).json({
            message: `Succesfully Deleted the Employee`,
        })
    } catch (error) {
        res.status(500).json({
            message: "There was an error",
            error
        })
    }
}

module.exports = {
    createEmployee,
    getAllEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
}
