import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Play } from '../../shared/model/Play';
import { PlayService } from '../play.service';

@Component({
  selector: 'app-play-details',
  templateUrl: './play-details.component.html',
  styleUrls: ['./play-details.component.css'],
})
export class PlayDetailsComponent implements OnInit {
  play: Play = new Play();

  constructor(private route: ActivatedRoute, private playService: PlayService) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.play = this.playService.getPlayById(id);
  }

  buyTicket(playId: number) {
    const plays = JSON.parse(localStorage.getItem('plays')!);
    const playIndex = plays.findIndex((play: Play) => play.id === playId);

    if (playIndex >= 0) {
      const play = plays[playIndex];
      if (play.ticketsLeft > 0) {
        play.ticketsLeft--;
        plays[playIndex] = play;
        localStorage.setItem('plays', JSON.stringify(plays));
        alert('Ticket bought successfully!');
        location.reload();
      } else {
        alert('No more tickets left for this play.');
      }
    }
  }
}
