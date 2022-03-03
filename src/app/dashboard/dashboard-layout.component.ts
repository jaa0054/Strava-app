import { Component, OnInit } from "@angular/core";
import { ActivityService } from "./activities.service";
import { ActivityModel } from "./activity-item.model";
import { activity_list } from "./activity-list";
import { ChallengeModel } from "./challenge-item.model";
import { challenge_list } from "./challenge-list";

@Component({
    selector: 'strava-dashboard-layout',
    templateUrl: 'dashboard-layout.component.html'
})
export class DashboardLayoutComponent implements OnInit{
    challenges: ChallengeModel [] = [];
    activities: ActivityModel [] = [];

    constructor(private service:ActivityService) {
        for (var challenge of challenge_list) {
          this.challenges.push(challenge);
        }
        }
  ngOnInit(): void {
    console.log("Fetch data");
    this.service.getActivities().subscribe(data => {
      console.log(data);
      for (var activity of data) {
        this.activities.push(activity);
      }
    });
  }
}