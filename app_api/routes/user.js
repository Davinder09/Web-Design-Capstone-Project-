const express = require('express');
const router = express.Router();
const ctrlUser = require('../controllers/user');


router
    .route('/users')
    .get(ctrlUser.getUsers)
    .post(ctrlUser.createUser);

router
    .route('/users/:userid')
    .get(ctrlUser.getSingleUser)
    .put(ctrlUser.updateUser);

module.exports = router;