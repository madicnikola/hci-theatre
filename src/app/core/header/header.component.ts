import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { DataService } from '../../shared/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public authService: AuthService) {}

  onLogout() {
    this.authService.logout();
  }

  // fetchStudents(param: string) {
  //   let uri;
  //   switch (param) {
  //     case 'mentor':
  //       uri = '/students/mentor/' + this.authService.getUserName();
  //       return this.dataService;
  //     case 'board_member':
  //       uri = '/students/board/' + this.authService.getUserName();
  //       return this.dataService;
  //     case 'all':
  //       uri = '/students/all';
  //       return this.dataService;
  //     default:
  //       throwError('invalid parameter');
  //   }
  // }
}
