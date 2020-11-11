import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServicesComponent } from './services/services.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    AboutusComponent,
    LoginComponent,
    DashboardComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    DeleteEmployeeComponent,
    UpdateEmployeeComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',component: ServicesComponent
      },
      {
      path: 'aboutus',component: AboutusComponent
      },
      {
        path: 'login',component: LoginComponent
      },
      {
         path: 'addEmployee',component: AddEmployeeComponent 
      },
      {
        path: '',component: DeleteEmployeeComponent 
     },
      {
         path: 'employee/:employeeId',component: UpdateEmployeeComponent
      },
      // {
      //   path: 'dashboard',component: DashboardComponent,
      // },
      {
        path: 'employee',component: EmployeeComponent,
      }
        // children: [
        //   { path: 'employee', component: EmployeeComponent }
        // ]
      // } 
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

