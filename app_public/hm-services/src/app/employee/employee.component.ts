import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../HMS services/employee-service.service';
import { Employee } from '../model/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeServiceService]
})
export class EmployeeComponent implements OnInit {

  employees : Employee[];

  constructor(private employeeService: EmployeeServiceService, private router: Router) { }

  ngOnInit(): void {
    this.employeeService.getEmployee().subscribe(result => {
      this.employees = result;
    }, error => {
      console.log('error is ', error);
    });
  }


  deleteEmployee(employeeid){
    this.employeeService.deleteEmployeeById(employeeid).subscribe(result => {
      alert("Employee Deleted Sucessfully");
      this.router.navigate(['/employee'])
                    .then(() => {
                      window.location.reload();
                    });
    }, error => {
      console.log('error is ', error);
    });

  }
}
