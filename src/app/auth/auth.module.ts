import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SigninComponent } from './signin/signin.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SignupStartComponent } from './signup/signup-start/signup-start.component';
import { SignupEmployeeComponent } from './signup/signup-employee/signup-employee.component';
import { SignupCustomerComponent } from './signup/signup-customer/signup-customer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatTabsModule } from '@angular/material/tabs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatOptionModule } from '@angular/material/core';
import { SharedModule } from '../shared/shared.module';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    SigninComponent,
    SignupStartComponent,
    SignupEmployeeComponent,
    SignupCustomerComponent,
  ],
  imports: [
    SharedModule,
    FormsModule,
    AuthRoutingModule,
    MatButtonModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatOptionModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatIconModule,
  ],
})
export class AuthModule {}
