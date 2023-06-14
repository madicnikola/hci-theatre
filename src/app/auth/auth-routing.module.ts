import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { SignupStartComponent } from './signup/signup-start/signup-start.component';
import { SignupEmployeeComponent } from './signup/signup-employee/signup-employee.component';
import { SignupCustomerComponent } from './signup/signup-customer/signup-customer.component';
import { SharedModule } from '../shared/shared.module';

const authRoutes: Routes = [
  {
    path: 'signup',
    children: [
      { path: '', component: SignupStartComponent },
      { path: 'student', component: SignupEmployeeComponent },
      { path: 'professor', component: SignupCustomerComponent },
    ],
  },
  { path: 'signin', component: SigninComponent },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
