import { Component } from "@angular/core";
import { ActivityModel } from "./activity-item.model";
import { activity_list } from "./activity-list";
import { ChallengeModel } from "./challenge-item.model";
import { challenge_list } from "./challenge-list";

@Component({
    selector: 'strava-dashboard-layout',
    templateUrl: 'dashboard-layout.component.html'
})
export class DashboardLayoutComponent{
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