import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ActivityCardComponent } from './dashboard/activitycard.component';
import { ChallengeCardComponent } from './dashboard/challengecard.component';
import { ProfileCardComponent } from './dashboard/profilecard.component';
import { BottomNavBarComponent } from './navigation/bottomnavbar.component';
import { TopNavBarComponent } from './navigation/topnavbar.component';
import { AppRoutingModule } from './app-routing.module';
import { TrainingLayoutComponent } from './training/training-layout.component';
import { ChallengeLayoutComponent } from './challenges/challenge-layout.component';
import { ExploreLayoutComponent } from './explore/explore-layout.component';
import { ProfileLayoutComponent } from './profile/profile-layout.component';
import { SubLayoutComponent } from './subscription/subscription-layout.component';
import { DashboardLayoutComponent } from './dashboard/dashboard-layout.component';
import { MainChallengeComponent } from './challenges/main-challenge.component';
import { ChallengeCatagoryComponent } from './challenges/challenge-category.component';
import { ChallengeComponent } from './challenges/challenge.component';
import { ProfileHeaderComponent } from './profile/header.component';
import { ProfileComponent } from './profile/profile.component';
import { TrophiesComponent } from './profile/trophies.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './user-info/user-info.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AddActivityComponent } from './dashboard/add-activity/add-activity.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationComponent } from './auth/authentication/authentication.component';



@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BottomNavBarComponent,
    ChallengeCardComponent,
    ProfileCardComponent,
    ActivityCardComponent,
    TrainingLayoutComponent,
    ChallengeLayoutComponent,
    ExploreLayoutComponent,
    ProfileLayoutComponent,
    SubLayoutComponent,
    DashboardLayoutComponent,
    MainChallengeComponent,
    ChallengeCatagoryComponent,
    ChallengeComponent,
    ProfileHeaderComponent,
    ProfileComponent,
    TrophiesComponent,
    UserInfoComponent,
    UserInfoComponent,
    AddActivityComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
