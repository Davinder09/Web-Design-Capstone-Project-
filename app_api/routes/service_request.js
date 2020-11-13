const express = require('express');
const router = express.Router();
const ctrlService_request = require('../controllers/service_request');


router
.route('/service_request')    
.post(ctrlService_request.createServiceRequest)
.get(ctrlService_request.getServiceRequests)


module.exports = router;