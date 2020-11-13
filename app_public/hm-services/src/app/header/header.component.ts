import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  admin = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("isUserLogin") == "true"){
      this.admin = true;
    }else{
      this.admin = false;
    }
  }

  logoutAdmin(){
    localStorage.clear();
    this.router.navigate(['/'])
                    .then(() => {
                      window.location.reload();
                    });
  }
  
}
