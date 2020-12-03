import { Component, OnInit } from '@angular/core';
import { CustomerRequestService } from '../HMS services/customer-request.service';
import { Request } from '../model/request';
import { Employee } from '../model/employee';
import { EmployeeServiceService } from '../HMS services/employee-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [CustomerRequestService, EmployeeServiceService]

})
export class DashboardComponent implements OnInit {

  employeeAssigned;
  serviceRequests: Request [];
  employees: Employee [];
  editMode: string;

  constructor(

    private customerRequestService: CustomerRequestService, 
    private employyeReq: EmployeeServiceService
    
    ) { }


  ngOnInit() {
    this.employyeReq.getEmployee().subscribe(result => {
      this.employees = result;
    }, error => {
      console.log('error is ', error);
    });

    this.customerRequestService.getCustomerServiceRequests().subscribe(result => {
      this.serviceRequests = result;
    }, error => {
      console.log('error is ', error);
    });
  }

  onChange(employeeName) {
    this.employeeAssigned = employeeName;
  }

  assignEmployee(service: Request){
    this.editMode = '';
    if(service != null){
      service.employee_assigned = this.employeeAssigned;
      this.customerRequestService.assignEmployee(service).subscribe((result: any) => {
        alert("Employee assigned successfully");
      }, error => {
        console.log('error is ', error);
        alert(error.message);
      });
    } else {
        alert('Invalid selection');        
    }

  }

  editAssignEmployee(service: Request){
    this.editMode = service._id;
  }
}
