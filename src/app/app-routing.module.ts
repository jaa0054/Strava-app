import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { TrainingLayoutComponent } from './dashboard/training-layout.component';

const routes:Routes  = [
  {
    path: 'Training', component: TrainingLayoutComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
