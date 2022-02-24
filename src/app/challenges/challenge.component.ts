import { Component, Input } from "@angular/core";

@Component({
    selector: 'strava-challenge',
    templateUrl: 'challenge.component.html',
    styleUrls: ['challenge.component.css']
})
export class ChallengeComponent {
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