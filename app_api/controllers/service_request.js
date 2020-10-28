const mongoose = require('mongoose');
const service_request = mongoose.model('service_request');


const getSingleUser = function(req, res){
    if (req.body && req.body.first_name && req.body.last_name && req.body.address && req.body.phone &&req.body.email ){
        if(!req.body.first_name && !req.body.last_name && !req.body.address && !req.body.phone && !req.body.email){
            res 
                .status(404) 
                .json({ "message": "Inavlid details" }); 
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