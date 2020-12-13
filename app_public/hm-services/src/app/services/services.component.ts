import { Component, OnInit } from '@angular/core';
import { CustomerRequestService } from '../HMS services/customer-request.service';
import { Request } from './../model/request';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers: [ CustomerRequestService ]
})
export class ServicesComponent implements OnInit {

  public request: Request

  constructor(private requestService: CustomerRequestService, private router: Router) { }

  ngOnInit(): void {
  }

  customerData(request) {
    if(request.customer_info.first_name && request.customer_info.last_name && request.customer_info.email && request.customer_info.phone && request.customer_info.address && request.service_date && (request.snow_removal || request.grass_cutting || request.indoor_cleaning)) {
      var selectedDate = new Date(request.service_date);
      var today = new Date();
      if(selectedDate < today){
        alert("Date can't be in past.");
        return;
      }else{
        request.service_date.toString();
        this.requestService.customerRequest(request).subscribe(result => {
          alert('Request generated successfully');
      }, error => {
        console.log('error is ', error);
        alert("Server error Please try again");
      });
      }      
    } else {
        alert('Invalid form entries');        
    }
    this.router.navigateByUrl('/payment');
  }
}
