import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-employee',
  templateUrl: './signup-employee.component.html',
  styleUrls: ['./signup-employee.component.css'],
})
export class SignupEmployeeComponent implements OnInit {
  selectedIndex: number = 0;

  filteredOptionsDegree: Observable<string[]>;
  filteredOptionsDepartment: Observable<string[]>;
  employeeSignupForm: FormGroup;

  validation_msgs = {
    departmentControl: [
      {
        type: 'invalidAutocompleteString',
        message: 'Please click one of the autocomplete options.',
      },
      { type: 'required', message: 'required' },
    ],
    degreeOfStudyControl: [
      {
        type: 'invalidAutocompleteString',
        message: 'Please click one of the autocomplete options.',
      },
      { type: 'required', message: 'required' },
    ],
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
    });
  }

  onSignup() {
    this.authService.register(this.employeeSignupForm.value).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (error) => console.log('Registration failed. Please try again')
    );
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
