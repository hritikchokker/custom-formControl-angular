import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { QuantityComponent } from './quantity.component';
import { QuantityControlComponent } from './quantity-control/quantity-control.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: QuantityComponent
  }
];


@NgModule({
  declarations: [
    QuantityComponent,
    QuantityControlComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule
  ]
})
export class QuantityModule { }
