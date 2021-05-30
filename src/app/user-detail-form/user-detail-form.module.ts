import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailFormComponent } from './user-detail-form.component';
import { RouterModule, Routes } from '@angular/router';
import { AddressModule } from '../address/address.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
  {
    path: '',
    component: UserDetailFormComponent
  }
];

@NgModule({
  declarations: [
    UserDetailFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    AddressModule
  ]
})
export class UserDetailFormModule { }
