const mongoose = require('mongoose');

const services = new mongoose.Schema({
    customer_info: {
        first_name: {
            type: String
        },
        last_name : {
            type: String
        },
        email: {
            type: String
        },
        phone: {
            type: String
        },
        address: {
            type: String
        }
    },
    snow_removal:{
        type: Boolean
    },
    grass_cutting:{
        type: Boolean
    },
    indoor_cleaning:{
        type: Boolean
    },
    service_date: {
        type: String
    },
    service_status: {
        type: Boolean
    },
    employee_assigned: {
        type: String
    }
});

mongoose.model('services', services);
