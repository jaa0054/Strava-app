import { Component } from '@angular/core';
import { ChallengeModel } from './dashboard/challenge-item.model';
import { challenge_list } from './dashboard/challenge-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DashBoard | Strava';
  challenges: ChallengeModel [] = [];

  constructor() {
    for (var challenge of challenge_list) {
      this.challenges.push(challenge);
    }
  }
}
