import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Play } from '../../shared/model/Play';
import { PlayService } from '../play.service';
import { User } from '../../shared/model/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;
  plays: Play[] = [];

  constructor(private router: Router, private playService: PlayService) {}

  ngOnInit(): void {
    this.plays = this.playService.getPlays();
    this.user = JSON.parse(localStorage.getItem('user')!);
  }

  onPlayClicked(id: number) {
    this.router.navigate(['/play', id]);
  }

  isEmployee() {
    return this.user.role === 'EMPLOYEE';
  }

  onDeleteClicked($event: MouseEvent, play: Play) {
    event.stopPropagation();
    this.playService.deletePlay(play.id);
    this.plays = this.playService.getPlays();
  }
}
