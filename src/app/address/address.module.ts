import {
  RouterModule,
  Routes
} from '@angular/router';

import { AddressComponent } from './address.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: AddressComponent
  }
];


@NgModule({
  declarations: [
    AddressComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AddressModule { }
