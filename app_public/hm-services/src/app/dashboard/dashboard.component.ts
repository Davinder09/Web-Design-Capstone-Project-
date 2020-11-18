import { Component, OnInit } from '@angular/core';
import { CustomerRequestService } from '../HMS services/customer-request.service';
import { Request } from '../model/request';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [CustomerRequestService]
})
export class DashboardComponent implements OnInit {

  serviceRequests: Request [];

  constructor(private customerRequestService: CustomerRequestService) { }

  ngOnInit() {
    this.customerRequestService.getCustomerServiceRequests().subscribe(result => {
      this.serviceRequests = result;
    }, error => {
      console.log('error is ', error);
    });
  }

}
