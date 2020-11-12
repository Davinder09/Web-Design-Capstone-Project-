import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../HMS services/employee-service.service';
import { Router } from '@angular/router';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
  providers: [EmployeeServiceService]
})
export class AddEmployeeComponent implements OnInit {

  constructor( private employeeService: EmployeeServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  addEmployee(employeeData: Employee){
    if(employeeData.first_name.trim() != "" && employeeData.last_name.trim() != "" && employeeData.phone.trim() != "" && employeeData.address.trim() != "" && employeeData.email.trim() != "") {
      this.employeeService.addEmployee(employeeData).subscribe((result: any) => {
        if(result.message){
          alert(result.message);
        }else{
          alert("Employee Added successfully");
          this.router.navigateByUrl('/employee');
        }
      
    }, error => {
      console.log('error is ', error);
      alert(error.message);
    });
  } else {
      alert('Incomplete Data');        
  }
  }
}
