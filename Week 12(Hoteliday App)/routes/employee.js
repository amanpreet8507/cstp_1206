const express = require('express');
const router = express.Router();
const EmployeeController = require('../controller/employee');



// Create Employee API
router.post('/', EmployeeController.createEmployee);

// Get All Employees API
router.get('/', EmployeeController.getAllEmployees);

// Updating an Employee
router.put('/:id', EmployeeController.updateEmployee);

// Get an employee based on ID
router.get('/:id', EmployeeController.getEmployeeById);

// Delete employee
router.delete('/:id', EmployeeController.deleteEmployee);

module.exports = router;
