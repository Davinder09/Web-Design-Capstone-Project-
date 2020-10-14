const mongoose = require('mongoose');


const userschema = new mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
        
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

mongoose.model('users', userschema);
