import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeServiceService]
})
export class EmployeeComponent implements OnInit {

  employees : Employee[];

  constructor(private employeeService: EmployeeServiceService) { }

  ngOnInit(): void {
    this.employeeService.getEmployee().subscribe(result => {
      this.employees = result
      console.log(this.employees);
    }, error => {
      console.log('error is ', error);
    });
  }
}
