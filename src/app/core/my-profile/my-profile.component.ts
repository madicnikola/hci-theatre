import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/model/User';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  user: any;
  show: boolean = false;
  password: string;
  constructor() {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);
  }

  saveChanges() {
    localStorage.setItem('user', JSON.stringify(this.user));

    const users: User[] = JSON.parse(localStorage.getItem('users')!);

    // Find the index of the current user in the array
    const index = users.findIndex((u) => u.id === this.user.id);

    // Update the current user's information in the array
    users[index] = this.user;

    // Set the updated array of users back into local storage
    localStorage.setItem('users', JSON.stringify(users));

    alert('Changes saved successfully!');
  }
  // click event function toggle
  showPassword() {
    this.show = !this.show;
  }
}
