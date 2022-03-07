import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivityModel } from "./activity-item.model";

@Injectable({
    providedIn:'root'
})
export class ActivityService{
    private baseURL:string = 'https://strava-app-7bfe3-default-rtdb.firebaseio.com/';
    private activitiesEndPoint:string = 'activities/.json';

    constructor(private http:HttpClient){
        
    }

    public getActivities() {
        return this.http.get<ActivityModel []>(this.baseURL + this.activitiesEndPoint);
    }
}