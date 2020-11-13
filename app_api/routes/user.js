const express = require('express');
const router = express.Router();
const ctrlUser = require('../controllers/user');


router
    .route('/users')    
    .post(ctrlUser.getSingleUser)

// router
//     .route('/users/:userid')
//     .put(ctrlUser.updateUser);

module.exports = router;