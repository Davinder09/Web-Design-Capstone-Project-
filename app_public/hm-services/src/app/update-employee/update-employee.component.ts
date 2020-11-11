import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../HMS services/employee-service.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Employee } from '../model/employee';
import { switchMap } from 'rxjs/operators';


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
    private http: HttpClient,
    private router: Router
      ) { }

  ngOnInit() {
       
     this.empId = this.route.snapshot.paramMap.get("employeeId");

     //pre-populate form based on employeeId
     if(this.empId){
       this.employeeService.getEmployeeById(this.empId).subscribe(result => {
         this.employee = result;
         console.log(this.employee);
       }, error => {
        console.log('error is ', error);
      });
     }
  }


  updateEmployee(nn){
      
  }
   
   


  }


 

