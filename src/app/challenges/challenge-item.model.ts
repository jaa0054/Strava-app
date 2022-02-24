export class ChallengeModel {
    img: string;
    title:string;
    description:string;
    date:string;
    friends:string;

    constructor(img: string, title: string, users: string, participants: string, days:string) {
        this.img = img;
        this.title = title;
        this.description = users;
        this.date = participants;
        this.friends = days;
    }
}