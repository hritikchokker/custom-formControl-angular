import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputMaskingComponent } from './input-masking.component';
import { DateMaskingComponent } from './components/date-masking/date-masking.component';
import { MobilenoMaskingComponent } from './components/mobileno-masking/mobileno-masking.component';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    component: InputMaskingComponent
  }
];

@NgModule({
  declarations: [
    InputMaskingComponent,
    DateMaskingComponent,
    MobilenoMaskingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class InputMaskingModule { }
