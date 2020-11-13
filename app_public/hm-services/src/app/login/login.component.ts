import { Component, OnInit } from '@angular/core';
import { AdminService } from '../HMS services/admin.service';
import { User } from './../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ AdminService ]
})
export class LoginComponent implements OnInit {

  public user: User

  constructor(private adminService: AdminService,  private router: Router) {}

  ngOnInit(): void {
    if(localStorage.getItem('userid')){
      localStorage.setItem('isUserLogin', "true");
    }else{
      localStorage.setItem('isUserLogin', "false");
    }
  }

  userData(user) {
    if(user.email && user.password) {
        this.adminService.validateLogin(user).subscribe((result: any) => {
        localStorage.setItem('userid', result._id);
        //set to maintain user login
        localStorage.setItem('isUserLogin', "true");
        this.router.navigate(['/dashboard'])
                    .then(() => {
                      window.location.reload();
                    });
      }, error => {
        console.log('error is ', error);
        alert("Invalid Email/Password. Please try again.");
      });
    } else {
        alert('enter user name and password');        
    }
  }
}
