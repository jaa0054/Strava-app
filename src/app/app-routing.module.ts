import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TrainingLayoutComponent } from './training/training-layout.component';
import { ChallengeLayoutComponent } from './challenges/challenge-layout.component';
import { ExploreLayoutComponent } from './explore/explore-layout.component';
import { ProfileLayoutComponent } from './profile/profile-layout.component';
import { SubLayoutComponent } from './subscription/subscription-layout.component';
import { DashboardLayoutComponent } from './dashboard/dashboard-layout.component';
import { AddActivityComponent } from './dashboard/add-activity/add-activity.component';
import { AuthenticationComponent } from './auth/authentication/authentication.component';

const routes:Routes  = [
  {
    path: 'Training', component: TrainingLayoutComponent
  },
  {
    path: 'Challenge', component: ChallengeLayoutComponent
  },
  {
    path: 'Explore', component: ExploreLayoutComponent
  },
  {
    path: 'Profile', component: ProfileLayoutComponent
  },
  {
    path: 'Subscription', component: SubLayoutComponent
  },
  {
    path: '', component: DashboardLayoutComponent
  },
  {
    path: 'admin', component: AddActivityComponent
  },
  {
    path: 'auth', component: AuthenticationComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
