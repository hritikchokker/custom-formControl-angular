import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatListModule
  ]
})
export class HomeModule { }
