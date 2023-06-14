import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { DatePipe, NgIf } from '@angular/common';
import { DataService } from '../shared/data.service';
import { AuthService } from '../auth/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { LoggingInterceptor } from '../shared/logging.interceptor';
import { ErrorInterceptor } from '../shared/error.interceptor';
import { AuthInterceptor } from '../shared/auth.interceptor';

@NgModule({
  declarations: [HeaderComponent, HomeComponent],
  imports: [AppRoutingModule, NgIf],
  exports: [AppRoutingModule, HeaderComponent],
  providers: [
    DataService,
    AuthService,
    DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
  ],
})
export class CoreModule {}
