const express = require('express');
const router = express.Router();
const ctrlEmployee = require('../controllers/employee');


router
    .route('/employee')    
    .get(ctrlEmployee.getEmployee)
    .post(ctrlEmployee.createEmployee)
router
    .route('/employee/:employeeid')
    .put(ctrlEmployee.updateEmployee)
    .delete(ctrlEmployee.deleteEmployee)

module.exports = router;