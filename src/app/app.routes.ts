import { Routes } from '@angular/router';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login-signup',
    pathMatch: 'full'
  },
  {
    path: 'login-signup',
    component: LoginSignupComponent,
  },
  {
    path: 'login', component: LoginComponent 
  },
  {
    path: 'dashboard', component: DashboardComponent
  }
];
