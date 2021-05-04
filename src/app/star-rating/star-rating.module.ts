import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StarRatingComponent } from './star-rating.component';

const routes: Routes = [
  {
    path: '',
    component: StarRatingComponent
  }
];

@NgModule({
  declarations: [
    StarRatingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StarRatingModule { }
