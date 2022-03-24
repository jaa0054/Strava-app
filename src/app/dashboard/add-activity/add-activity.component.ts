import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../activities.service';
import { ActivityModel } from '../activity-item.model';

@Component({
  selector: 'strava-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css']
})
export class AddActivityComponent implements OnInit {

  constructor(private as:ActivityService) { }

  ngOnInit(): void {
  }

  addActvity(activity:ActivityModel) {
    console.log("you pressed add actvity");
    console.log(activity);
    this.as.addActivity(activity);
  }

}
