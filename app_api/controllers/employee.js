const mongoose = require('mongoose');
const Employee = mongoose.model('employee');

const getEmployee = function(req, res){
    Employee.find().exec(function(err, employeedata){
        if (err){
            res
            .status(404)
            .json(err);
        return;
        }
        res
        .status(200)
        .json(employeedata);
    });
};

    const createEmployee = function (req,res){
        Employee.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address
        },(err,employeedata)=> {
            if(err){
                res
                    .status(404)
                    .json(err);    
            }
            else{
                res
                    .status(200)
                    .json(employeedata);  
            }
        });
    };
    const updateEmployee = function (req,res){
        if(!req.params.employeeid){
            res 
                .status(404) 
                .json({ "message": "Not Found, employee id is required" }); 
            return;   
        }
        Employee.findById(req.params.employeeid)
            .exec((err,employeedata)=>{
            if(!employeedata){
                res 
                    .status(404) 
                    .json({ "message": "Employee id not  found" }); 
                return;      
            } else if(err){
                res
                    .status(404)
                    .json(err); 
                return;   
            }
            employeedata.first_name = req.body.first_name;
            employeedata.last_name = req.body.last_name;
            employeedata.email = req.body.email;
            employeedata.phone = req.body.phone;
            employeedata.address = req.body.address;
            employeedata.save((err,employeedata)=>{
                if(err){
                    res
                        .status(404)
                        .json(err);
                } else{
                    res
                        .status(200)
                        .json(employeedata);
                }
            });
        });
    };
    const deleteEmployee = function(req, res){
        const employeeid = req.params.employeeid;
        
        if (employeeid){
            Employee 
            .findByIdAndRemove(employeeid)
            .exec((err, employeedata) => {
                if (err) {
                    res
                    .status(404)
                    .json(err);
                    return;
                }
                res
            .status(204)
            .json(null);
            });
        } else {
            res
            .status(404)
            .json({"message" : "No employee id"});
        
        }
    };


module.exports ={
    getEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee
}