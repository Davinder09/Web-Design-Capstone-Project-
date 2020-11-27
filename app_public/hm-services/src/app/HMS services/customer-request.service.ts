import { Injectable } from '@angular/core';
import { Request } from '../model/request';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerRequestService {

  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  customerRequest(request: Request){
    return this.http.post(this.url + '/api/service_request',{
      customer_info : {
        first_name : request.customer_info.first_name,
        last_name : request.customer_info.last_name,
        email : request.customer_info.email,
        phone : request.customer_info.phone,
        address : request.customer_info.address,
      },
      snow_removal : request.snow_removal,
      grass_cutting : request.grass_cutting,
      indoor_cleaning : request.indoor_cleaning,
      service_date: request.service_date        
    }).pipe(
        map(res => res),
        catchError(error => throwError(error.message || error))
    );
  }

  getCustomerServiceRequests(){
    return this.http.get(this.url + '/api/service_request')
    .pipe(
      map((data: Request[]) => {
        return data;
      }), catchError( error => {
        return throwError( 'Something went wrong!' );
      })
    )
  }


  assignEmployee(request: Request){
    return this.http.put(this.url + '/api/service_request',{
      customer_info : {
        first_name : request.customer_info.first_name,
        last_name : request.customer_info.last_name,
        email : request.customer_info.email,
        phone : request.customer_info.phone,
        address : request.customer_info.address,
      },
      snow_removal : request.snow_removal,
      grass_cutting : request.grass_cutting,
      indoor_cleaning : request.indoor_cleaning,
      service_date: request.service_date,
      employee_assigned: request.employee_assigned,
      service_status: request.service_status,
      _id: request._id
    }).pipe(
        map(res => res),
        catchError(error => throwError(error.message || error))
    );    
  }
}
