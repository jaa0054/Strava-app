export class ChallengeModel {
    img: string;
    title:string;
    users:string;
    participants:number;
    days:number;

    constructor(img: string, title: string, users: string, participants: number, days:number) {
        this.img = img;
        this.title = title;
        this.users = users;
        this.participants = participants;
        this.days = days;
    }
}