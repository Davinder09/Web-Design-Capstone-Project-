const mongoose = require('mongoose');
const User = mongoose.model('users');

const getSingleUser = function(req, res){
    if (req.body && req.body.email && req.body.password){
        if(!req.body.email && !req.body.password){
            res 
                .status(404) 
                .json({ "message": "Inavlid email/password" }); 
            return;   
        }
        User.findOne({email: req.body.email})
            .exec((err,userdata)=>{
            if(!userdata){
                res 
                    .status(404) 
                    .json({ "message": "User not found" }); 
                return;      
            } else if(err){
                res
                    .status(404)
                    .json(err); 
                return;   
            }
            res
            .status(200)
            .json(userdata);
               
        });
    }

}


module.exports ={
    getSingleUser
}