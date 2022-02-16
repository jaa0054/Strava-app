import { Component } from "@angular/core";
import { activity_list } from "./activity-list";

@Component({
    selector: 'strava-dashboard-layout',
    templateUrl: 'dashboard-layout.component.html'
})
export class DashboardLayoutComponent{
    activity_list: any = activity_list;
}