import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-customer',
  templateUrl: './signup-customer.component.html',
  styleUrls: ['./signup-customer.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }
  ]
})
export class SignupCustomerComponent implements OnInit {
  isLinear = true;
  signUpCustomerForm: FormGroup;

  get formArray(): AbstractControl | null {
    return this.signUpCustomerForm.get('formArray');
  }

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signUpCustomerForm = this.formBuilder.group({
      formArray: this.formBuilder.array([
        this.formBuilder.group({
          name: ['', Validators.required],
          surname: ['', Validators.required],
          birthDate: Date.now()
        }),
        this.formBuilder.group({
          address: ['', [Validators.required]],
          fullAddress: ['', Validators.required],
          phoneNumber: ['', [Validators.required, Validators.minLength(4)]]
        }),
        this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          username: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(4)]]
        })
      ])
    });
  }

  onSignup() {
    const data = {
      ...this.signUpCustomerForm.get('formArray.0').value,
      ...this.signUpCustomerForm.get('formArray.1').value,
      ...this.signUpCustomerForm.get('formArray.2').value
    };
    this.authService.register({ ...data, role: 'CUSTOMER' }).subscribe({
      next: (user) => {
        this.authService.login(user);
        this.router.navigate(['']);
      },
      error: (error) => console.log('Registration failed. Please try again')
    });
  }
}
