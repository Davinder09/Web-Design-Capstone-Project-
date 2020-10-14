import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  constructor(private http: HttpClient) {}

  validateLogin(user: User){    
    return this.http.post(('/api/users/'),{
        email : user.email,
        password : user.password
    })
  }
}