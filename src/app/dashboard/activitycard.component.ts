import { Component, Input } from "@angular/core";

@Component({
    selector: 'strava-activitycard',
    templateUrl: 'activitycard.component.html',
    styleUrls: ['activitycard.component.css']
})
export class ActivityCardComponent {
    @Input() img:string;
    @Input() title:string;
    @Input() user:string;
    @Input() tod:string;
    @Input() miles:number;
    @Input() elev:number;
    @Input() time:string;
    @Input() acheiv:number;
    @Input() kudos:number;

    constructor() {
        this.img = "";
        this.title = "";
        this.user = "";
        this.tod = "";
        this.miles = 0;
        this.elev = 0;
        this.time = "";
        this.acheiv = 0;
        this.kudos = 0;
    }
}