const mongoose = require('mongoose');


const services = new mongoose.Schema({
    first_name:{
        type: String
    },
    last_name:{
        type:String
    },
    address:{
        type:String
    },
    phone:{
        type:String
    },
    email:{
        type:String,
        required: true        
    }
    
    
    
    
});

mongoose.model('service_request', services);
