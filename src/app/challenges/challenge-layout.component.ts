import { Component } from "@angular/core";
import { ChallengeModel } from "./challenge-item.model";
import { challenge_list } from "./challenge-list";


@Component({
    selector: 'strava-challenge-layout',
    templateUrl: 'challenge-layout.component.html'
})
export class ChallengeLayoutComponent{
    challenges: ChallengeModel [] = [];

    constructor() {
        for (var challenge of challenge_list) {
          this.challenges.push(challenge);
        }
        }
}