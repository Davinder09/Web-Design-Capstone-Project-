const mongoose = require('mongoose');


const userschema = new mongoose.Schema({
    first_name:{
        type: String
    },
    last_name:{
        type:String
    },
    email:{
        type:String,
        required: true        
    },
    phone:{
        type:String
    },
    address:{
        type:String
    },
    password:{
        type:String,
        required:true
    }
});

mongoose.model('users', userschema);
