import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../../shared/dialog/dialog.component';

@Component({
  selector: 'app-signup-customer',
  templateUrl: './signup-customer.component.html',
  styleUrls: ['./signup-customer.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class SignupCustomerComponent implements OnInit {
  academicRankControl = new FormControl();
  titleControl = new FormControl();
  isLinear = true;
  signUpCustomerForm: FormGroup;

  validation_msgs = {
    titleControl: [
      {
        type: 'invalidAutocompleteString',
        message: 'Please click one of the autocomplete options.',
      },
      { type: 'required', message: 'required' },
    ],
    academicRankControl: [
      {
        type: 'invalidAutocompleteString',
        message: 'Please click one of the autocomplete options.',
      },
      { type: 'required', message: 'required' },
    ],
  };

  get formArray(): AbstractControl | null {
    return this.signUpCustomerForm.get('formArray');
  }

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.signUpCustomerForm = this.formBuilder.group({
      formArray: this.formBuilder.array([
        this.formBuilder.group({
          name: ['', Validators.required],
          surname: ['', Validators.required],
          birthDate: Date.now(),
        }),
        this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          username: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(4)]],
        }),
      ]),
    });
  }

  onSignup() {
    const data = {
      ...this.signUpCustomerForm.get('formArray.0').value,
      ...this.signUpCustomerForm.get('formArray.1').value,
    };
    this.authService.register(data).subscribe(
      (data) => {
        this.router.navigate(['']);
        // this.matDialog.open(DialogComponent, {
        //   data: {
        //     title: 'Obaveštenje',
        //     message:
        //       'Poslat Vam je email za verifikaciju naloga! Potrebno je da potvrdite email adresu kako biste se uspešno registrovali.',
        //   },
        // });
      },
      (error) => console.log('Registration failed. Please try again')
    );
  }
}
