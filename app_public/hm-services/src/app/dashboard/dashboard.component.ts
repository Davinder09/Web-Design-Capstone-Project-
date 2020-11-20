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

  serviceRequests: Request [];
  employees: Employee [];

  constructor(private customerRequestService: CustomerRequestService, private employyeReq: EmployeeServiceService) { }


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

}
