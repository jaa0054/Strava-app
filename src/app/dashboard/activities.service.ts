import { Injectable } from "@angular/core";
import { ActivityModel } from "./activity-item.model";
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Injectable({
    providedIn:'root'
})
export class ActivityService{
    

    constructor(private db:AngularFireDatabase){
        
    }

    public getActivities() {
        return this.db.list<ActivityModel>("activities").valueChanges();
    }
}