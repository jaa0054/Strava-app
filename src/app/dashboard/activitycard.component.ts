import { Component, Input } from "@angular/core";

@Component({
    selector: 'strava-activitycard',
    templateUrl: 'activitycard.component.html',
    styleUrls: ['activitycard.component.css']
})
export class ActivityCardComponent {
    @Input() img:string;
    @Input() title:string;
    @Input() users:string;
    @Input() participants:number;
    @Input() days:number;

    constructor() {
        this.img = "";
        this.title = "";
        this.users = "";
        this.participants = 0;
        this.days = 0;
    }
}