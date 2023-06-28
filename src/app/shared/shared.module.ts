import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownDirective } from './dropdown.directive';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowHidePasswordComponent } from './show-hide-password/show-hide-password.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [DropdownDirective, DialogComponent, ShowHidePasswordComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    DropdownDirective,
    DialogComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {}
