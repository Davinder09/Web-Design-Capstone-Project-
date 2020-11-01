const express = require('express');
const router = express.Router();
const ctrlService_request = require('../controllers/service_request');


router
    .route('/service_request')    
    .post(ctrlUser.getSingleUser)

// router
//     .route('/users/:userid')
//     .put(ctrlUser.updateUser);

module.exports = router;