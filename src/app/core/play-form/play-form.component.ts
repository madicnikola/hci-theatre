import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlayService } from '../play.service';
import { Play } from '../../shared/model/Play';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play-form',
  templateUrl: './play-form.component.html',
  styleUrls: ['./play-form.component.css']
})
export class PlayFormComponent {
  playForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private playService: PlayService
  ) {
    this.playForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const newPlay: Play = {
      id: this.getNextId(),
      name: this.playForm.controls['name'].value,
      description: this.playForm.controls['description'].value,
      image: this.playForm.controls['image'].value,
      ticketsLeft: 50
    };

    let plays = this.playService.getPlays();
    plays.push(newPlay);
    localStorage.setItem('plays', JSON.stringify(plays));
    alert('New play added successfully!');
    this.playForm.reset();
    this.router.navigate(['']);
  }

  getNextId() {
    let plays = this.playService.getPlays();
    let maxId = 0;
    plays.forEach((play) => {
      if (play.id > maxId) {
        maxId = play.id;
      }
    });
    return maxId + 1;
  }
}
