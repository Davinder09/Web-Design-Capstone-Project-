const mongoose = require('mongoose');
const User = mongoose.model('users');

// const getUsers = function(req, res){
//     User.find().exec(function(err, userdata){
//         if (err){
//             res
//             .status(404)
//             .json(err);
//         return;
//         }
//         res
//         .status(200)
//         .json(userdata);
//     });
// };
// const createUser = function (req,res){
//     User.create({
//         first_name: req.body.first_name,
//         last_name: req.body.last_name,
//         email: req.body.email,
//         phone: req.body.phone,
//         address: req.body.address,
//         passowrd: req.body.passowrd
//     },(err,userdata)=> {
//         if(err){
//             res
//                 .status(404)
//                 .json(err);    
//         }
//         else{
//             res
//                 .status(200)
//                 .json(userdata);  
//         }
//     });
// };
const getSingleUser = function(req, res){
    if (req.params && req.params.email && req.params.password){
        //find based on email and password
        const result = User.find({
            email: req.params.email,
            password: req.params.password
        })

        if(!result){
            res
            .status(404)
            .json({"message" : "user id not found"});
            return;
        }
        else if (err){
            res
            .status(404)
            .json(err);
            return;
        }
        else{
            res
            .status(200)
            .json(result);
        }
        // User
        // .findById(req.params.email)
        // .exec((err, userdata) => {
        //     if(!userdata){
        //         res
        //         .status(404)
        //         .json({"message" : "user id not found"});
        //         return;
        //     } else if (err) {
        //         res
        //         .status(404)
        //         .json(err);
        //         return;
        //     }
        //     res
        //     .status(200)
        //     .json(userdata);
        // });
    } else {
        res
        .status(404)
        .json({"message" : "No user id in request"});
    }
};
const updateUser = function (req,res){
    if(!req.params.userid){
        res 
            .status(404) 
            .json({ "message": "Not Found, user id is required" }); 
        return;   
    }
    User.findById(req.params.userid)
        .exec((err,userdata)=>{
        if(!userdata){
            res 
                .status(404) 
                .json({ "message": "user id not  found" }); 
            return;      
        } else if(err){
            res
                .status(404)
                .json(err); 
            return;   
        }
        userdata.first_name = req.body.first_name;
        userdata.last_name = req.body.last_name;
        userdata.email = req.body.email;
        userdata.phone = req.body.phone;
        userdata.address = req.body.address;
        userdata.password = req.body.password;
        userdata.save((err,userdata)=>{
            if(err){
                res
                    .status(404)
                    .json(err);
            } else{
                res
                    .status(200)
                    .json(userdata);
            }
        });
    });
};


module.exports ={
    getUsers,
    createUser,
    getSingleUser,
    updateUser
}