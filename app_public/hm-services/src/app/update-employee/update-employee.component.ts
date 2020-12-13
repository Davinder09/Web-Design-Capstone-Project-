import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../HMS services/employee-service.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Employee } from '../model/employee';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
  providers: [EmployeeServiceService]
})
export class UpdateEmployeeComponent implements OnInit {

  empId: string;
  employee = new Employee("","","","","","");

  private url = 'http://localhost:3000';

  constructor(
    private employeeService: EmployeeServiceService,
    private route: ActivatedRoute,
    private router: Router
      ) { }

  ngOnInit() {
       
     this.empId = this.route.snapshot.paramMap.get("employeeId");

     //pre-populate form based on employeeId
     if(this.empId){
       this.employeeService.getEmployeeById(this.empId).subscribe(result => {
         this.employee = result;
       }, error => {
        console.log('error is ', error);
      });
     }
  }

  updateEmployee(updatedEmployee){
      if(updatedEmployee.first_name.trim() != "" && updatedEmployee.last_name.trim() != "" && updatedEmployee.phone.trim() != "" && updatedEmployee.address.trim() != "" && updatedEmployee.email.trim() != "") {
        this.employeeService.updateEmployee(this.empId, updatedEmployee).subscribe((result: any) => {
        alert("Employee updated successfully");
        this.router.navigateByUrl('/employee');
      }, error => {
        console.log('error is ', error);
        alert(error.message);
      });
    } else {
        alert('Incomplete Data');        
    }
  }

  }


 

