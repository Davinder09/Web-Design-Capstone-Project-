import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
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


  getEmployeeById(employeeId: String)  {
    return this.http.get(this.url + '/api/employee/' + employeeId)
         .pipe(
          map((data: Employee) => {
            return data;
          }), catchError( error => {
            return throwError( 'Something went wrong!' );
          })
        )
  }

  updateEmployee(employeeId: String, employee: Employee) {
    return this.http.put(this.url + '/api/employee/' + employeeId, {
      email : employee.email,
      phone : employee.phone,
      first_name: employee.first_name,
      last_name: employee.last_name,
      address: employee.address
    }).pipe(
        map(res => res),
        catchError(error => throwError(error.message || error))
    );
  }

  addEmployee(employee: Employee) {
    return this.http.post(this.url + '/api/employee', {
      email : employee.email,
      phone : employee.phone,
      first_name: employee.first_name,
      last_name: employee.last_name,
      address: employee.address
    }).pipe(
        map(res => res),
        catchError(error => throwError(error.message || error))
    );
  }

  deleteEmployeeById(employeeId: String)  {
    return this.http.delete(this.url + '/api/employee/' + employeeId)
         .pipe(
          map((data: Employee) => {
            return data;
          }), catchError( error => {
            return throwError( 'Something went wrong!' );
          })
        )
  }
 
}

