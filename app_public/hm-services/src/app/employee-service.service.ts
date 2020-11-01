import { Injectable } from '@angular/core';
import { Employee } from './model/employee';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private url = 'http://localhost:3000';
  
  constructor(private http: HttpClient) {}

  getEmployee(){
    return this.http.get(this.url + '/api/employee')
    .pipe(
      map((data: Employee[]) => {
        return data;
      }), catchError( error => {
        return throwError( 'Something went wrong!' );
      })
   )
  }

}

