export class ActivityModel {
    img: string;
    title:string;
    user:string;
    tod:string;
    miles:number;
    elev:number;
    time:string;
    acheiv:number;
    kudos:number;

    constructor(img: string, title: string, user: string, tod: string, miles:number, elev:number, time: string, acheiv: number, kudos:number) {
        this.img = img;
        this.title = title;
        this.user = user;
        this.tod = tod;
        this.miles = miles;
        this.elev = elev;
        this.time = time;
        this.acheiv = acheiv;
        this.kudos = kudos;
    }
}