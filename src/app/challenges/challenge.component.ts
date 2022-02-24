import { Component, Input } from "@angular/core";

@Component({
    selector: 'strava-challenge',
    templateUrl: 'challenge.component.html',
    styleUrls: ['challenge.component.css']
})
export class ChallengeComponent {
    @Input() img:string;
    @Input() title:string;
    @Input() description:string;
    @Input() date:string;
    @Input() friends:string;

    constructor() {
        this.img = "";
        this.title = "";
        this.description = "";
        this.date = "";
        this.friends = "";
    }
}