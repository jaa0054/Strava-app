import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ActivityCardComponent } from './dashboard/activitycard.component';
import { ChallengeCardComponent } from './dashboard/challengecard.component';
import { ProfileCardComponent } from './dashboard/profilecard.component';
import { BottomNavBarComponent } from './navigation/bottomnavbar.component';
import { TopNavBarComponent } from './navigation/topnavbar.component';
import { AppRoutingModule } from './app-routing.module';
import { TrainingLayoutComponent } from './dashboard/training-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BottomNavBarComponent,
    ChallengeCardComponent,
    ProfileCardComponent,
    ActivityCardComponent,
    TrainingLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
