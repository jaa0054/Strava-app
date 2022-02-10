import { Component, Input } from "@angular/core";

@Component({
    selector: 'strava-challengecard',
    templateUrl: 'challengecard.component.html',
    styleUrls: ['challengecard.component.css']
})
export class ChallengeCardComponent {
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