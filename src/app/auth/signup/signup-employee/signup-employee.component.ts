import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-employee',
  templateUrl: './signup-employee.component.html',
  styleUrls: ['./signup-employee.component.css']
})
export class SignupEmployeeComponent implements OnInit {
  selectedIndex: number = 0;

  employeeSignupForm: FormGroup;

  validation_msgs = {
    fullAddress: [{ type: 'required', message: 'required' }],
    address: [{ type: 'required', message: 'required' }]
  };

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.employeeSignupForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      birthDate: Date.now(),

      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],

      address: ['', [Validators.required]],
      fullAddress: ['', [Validators.required]],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)
        ]
      ]
    });
  }

  onSignup() {
    this.authService.register(this.employeeSignupForm.value).subscribe({
      next: (data) => {
        const payload = this.employeeSignupForm.value;
        this.authService.register({ ...payload, role: 'EMPLOYEE' });
        this.authService.login(payload);
        this.router.navigate(['']);
      },
      error: (error) => console.log('Registration failed. Please try again')
    });
  }
  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.selectedIndex = tabChangeEvent.index;
  }

  nextStep() {
    if (this.selectedIndex != 3) {
      this.selectedIndex = this.selectedIndex + 1;
    }
  }

  previousStep() {
    if (this.selectedIndex != 0) {
      this.selectedIndex = this.selectedIndex - 1;
    }
  }
}
