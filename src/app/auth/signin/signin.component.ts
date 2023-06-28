import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { LoginRequestPayload } from '../../shared/dto/login-request.payload';
import { throwError } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../shared/dialog/dialog.component';
import { User } from '../../shared/model/User';
import { PlayService } from '../../core/play.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  username!: string;
  password!: string;
  errorMessage!: string;
  loginForm: FormGroup;
  loginRequestPayload: LoginRequestPayload;
  private isError: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: '',
      password: ''
    });
  }

  onSignIn() {
    this.loginRequestPayload = this.loginForm.value;

    this.authService.login(this.loginRequestPayload);
  }
}
