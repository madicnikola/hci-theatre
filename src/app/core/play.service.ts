import { Injectable } from '@angular/core';
import { Play } from '../shared/model/Play';
import { User } from '../shared/model/User';

@Injectable({
  providedIn: 'root'
})
export class PlayService {
  private readonly PLAY_KEY = 'plays';

  constructor() {
    const plays = this.getPlays();
    if (plays.length === 0) {
      const defaultPlays: Play[] = [
        {
          id: 0,
          image: 'https://repertoar.rs/wp-content/uploads/jpg-3.jpg',
          name: 'Godine vrana',
          description:
            'Pozorišta su sve ono što nam treba u bilo kojoj vremenskoj instanci,' +
            ' pogotovo kada preovladava apatija u našoj svakodnevici.' +
            ' Drama Godine vrana po tekstu i režiji Siniše Kovačevića predstavlja jedno od najnovijih kapitalnih izvedbi na Velikoj sceni beogradskog Narodnog pozorišta.',
          ticketsLeft: 1
        },
        {
          id: 1,
          image:
            'https://repertoar.rs/wp-content/uploads/77183091_2673536919395395_2683807694699102208_o-1-311x450.jpg',
          name: 'Fantom iz Opere',
          description:
            'Za mjuzikl Fantom iz Opere (ako već niste pogledali) sigurno ste čuli putem preporuke vaših prijatelja ili poznanika.' +
            ' U pitanju je klasik koji je dobio svoje drugo ruho kroz različite umetničke forme. Naime, ovo je istoimeni roman francuskog pisca Gastona Lerua,' +
            ' koji potiče iz 1910. godine. Svoju planetarnu popularnost je stekao kroz šarenolike filmske, ' +
            'a najviše pozorišne adaptacije – nemi horor film iz 1925. godine i mjuzikl Endrjua Lojd Vebera (Andrew Lloyd Webber) iz 1986. godine.',
          ticketsLeft: 50
        }
      ];
      localStorage.setItem(this.PLAY_KEY, JSON.stringify(defaultPlays));
    }

    const users = this.getUsers();
    if (users.length === 0) {
      const defaultUsers: User[] = [
        {
          id: 1,
          username: 'admin',
          password: 'admin',
          name: 'Nikola',
          surname: 'Madic',
          address: 'Gregorciceva 21',
          phoneNumber: '+38160123789',
          role: 'EMPLOYEE'
        },
        {
          id: 2,
          username: 'milica',
          password: 'milica',
          name: 'Milica',
          surname: 'Jevtic',
          address: 'Vojvode Stepe 1',
          phoneNumber: '060/123789',
          role: 'EMPLOYEE'
        }
      ];
      localStorage.setItem('users', JSON.stringify(defaultUsers));
    }
  }
  getUsers() {
    const usersStr = localStorage.getItem('users');
    return usersStr ? JSON.parse(usersStr) : [];
  }

  getPlays(): Play[] {
    const playsStr = localStorage.getItem(this.PLAY_KEY);
    return playsStr ? JSON.parse(playsStr) : [];
  }

  getPlayById(id: number): Play {
    const plays = this.getPlays();
    return plays.find((p) => p.id === id)!;
  }

  addPlay(play: Play): void {
    const plays = this.getPlays();
    plays.push(play);
    localStorage.setItem(this.PLAY_KEY, JSON.stringify(plays));
  }

  updatePlay(play: Play): void {
    const plays = this.getPlays();
    const index = plays.findIndex((p) => p.id === play.id);
    if (index !== -1) {
      plays[index] = play;
      localStorage.setItem(this.PLAY_KEY, JSON.stringify(plays));
    }
  }

  deletePlay(id: number): void {
    const plays = this.getPlays();
    const index = plays.findIndex((p) => p.id === id);
    if (index !== -1) {
      plays.splice(index, 1);
      localStorage.setItem(this.PLAY_KEY, JSON.stringify(plays));
    }
  }
}
