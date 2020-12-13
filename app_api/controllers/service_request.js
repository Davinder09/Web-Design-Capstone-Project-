const mongoose = require('mongoose');
const Services = mongoose.model('services');


const getServiceRequests = function(req, res){
    Services.find().exec(function(err, serviceRequests){
        if (err){
            res
            .status(404)
            .json(err);
        return;
        }
        res
        .status(200)
        .json(serviceRequests);
    });
};

const createServiceRequest = function (req,res){
    if(req.body){
        if(req.body.snow_removal == ""){
            req.body.snow_removal = false
        }
        if(req.body.indoor_cleaning == ""){
            req.body.indoor_cleaning = false
        }
        if(req.body.grass_cutting == ""){
            req.body.grass_cutting = false
        }
        Services.create({
            snow_removal: req.body.snow_removal,
            grass_cutting: req.body.grass_cutting,
            indoor_cleaning: req.body.indoor_cleaning,
            service_date: req.body.service_date,
            customer_info: {
                first_name: req.body.customer_info.first_name,
                last_name: req.body.customer_info.last_name,
                email: req.body.customer_info.email,
                phone: req.body.customer_info.phone,
                address: req.body.customer_info.address
            },
            service_status: false,
            employee_assigned: ""
        },(err,requestData)=> {
            if(err){
                res
                    .status(404)
                    .json(err);    
            }
            else{
                res
                    .status(200)
                    .json(requestData);  
            }
        });
    }
};

const assignEmployee = function (req,res){
    if(req.body){
        if(req.body._id != "" && req.body.employee_assigned != ""){
            const updatedService = {
                snow_removal: req.body.snow_removal,
                grass_cutting: req.body.grass_cutting,
                indoor_cleaning: req.body.indoor_cleaning,
                service_date: req.body.service_date,
                customer_info: {
                    first_name: req.body.customer_info.first_name,
                    last_name: req.body.customer_info.last_name,
                    email: req.body.customer_info.email,
                    phone: req.body.customer_info.phone,
                    address: req.body.customer_info.address
                },
                service_status: req.body.service_status,
                employee_assigned: req.body.employee_assigned,
                _id: req.body._id
            };
            Services.updateOne({_id: req.body._id}, updatedService,
            (err,requestData)=>{
                if(err){
                    res
                        .status(404)
                        .json(err);
                } else{
                    res
                        .status(200)
                        .json(requestData);
                }
            });
        }   
    }
}
module.exports ={
    createServiceRequest,
    getServiceRequests,
    assignEmployee
}