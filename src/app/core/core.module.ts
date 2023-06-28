import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { DatePipe } from '@angular/common';
import { DataService } from '../shared/data.service';
import { AuthService } from '../auth/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { LoggingInterceptor } from '../shared/logging.interceptor';
import { ErrorInterceptor } from '../shared/error.interceptor';
import { PlayDetailsComponent } from './play-details/play-details.component';
import { PlayService } from './play.service';
import { SharedModule } from '../shared/shared.module';
import { PlayFormComponent } from './play-form/play-form.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import {
  NgbDropdown,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownToggle
} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    PlayDetailsComponent,
    PlayFormComponent,
    MyProfileComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    NgbDropdownItem,
    NgbDropdownMenu,
    NgbDropdownToggle,
    NgbDropdown
  ],
  exports: [AppRoutingModule, HeaderComponent],
  providers: [
    DataService,
    PlayService,
    AuthService,
    DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ]
})
export class CoreModule {}
