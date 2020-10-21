import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from './model/user';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class AdminService {

  private url = 'http://localhost:3000';
  
  constructor(private http: HttpClient) {}

  validateLogin(user: User){  
    console.log(user);
    return this.http.post(this.url + '/api/users',{
      email : user.email,
      password : user.password
    }).pipe(
        map(res => res),
        catchError(error => throwError(error.message || error))
    );
    // getting single book based on the selected id
  // getSingleBook(bookId: String) :  Promise<void | Book> {
  //   return this.http.get(this.booksUrl + '/' + bookId)
  //               .toPromise()
  //               .then(response => response.json() as Book)
  //               .catch(this.handleError);
  }
}

