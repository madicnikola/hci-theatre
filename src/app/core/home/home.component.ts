import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Play } from '../../shared/model/Play';
import { PlayService } from '../play.service';
import { User } from '../../shared/model/User';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../shared/dialog/dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;
  plays: Play[] = [];
  sortAscending = false;
  showFullText: boolean = false; // Initialize as false

  constructor(private router: Router, private playService: PlayService,private dialog: MatDialog) {}

  ngOnInit(): void {
    this.plays = this.playService.getPlays();
    this.user = JSON.parse(localStorage.getItem('user')!);
  }

  onPlayClicked(id: number) {
    this.router.navigate(['/play', id]);
  }

  isEmployee() {
    return this.user?.role === 'EMPLOYEE';
  }

  onDeleteClicked($event: MouseEvent, play: Play) {
    event.stopPropagation();
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { message: 'Are you sure you want to delete this item?' },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.playService.deletePlay(play.id);
        this.plays = this.playService.getPlays();
      }
    });
  }
  onSortByNameClicked(){
    if(this.isEmployee()){
      return;
    }

    this.sortAscending = !this.sortAscending;
    if(this.sortAscending){
      this.plays.sort((a,b) => a.name.localeCompare(b.name))
    }else {
      this.plays.sort((a,b)=> b.name.localeCompare(a.name) )
    }
  }

  toggleText() {
    this.showFullText = !this.showFullText;
  }
}
