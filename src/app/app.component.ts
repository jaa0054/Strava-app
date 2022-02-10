import { Component } from '@angular/core';
import { ActivityModel } from './dashboard/activity-item.model';
import { ChallengeModel } from './dashboard/challenge-item.model';
import { challenge_list } from './dashboard/challenge-list';
import { activity_list } from './dashboard/activity-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DashBoard | Strava';
  challenges: ChallengeModel [] = [];
  activities: ActivityModel [] = [];

  constructor() {
    for (var challenge of challenge_list) {
      this.challenges.push(challenge);
    }
    for (var activity of activity_list) {
      this.activities.push(activity);
    }
    }
    }
