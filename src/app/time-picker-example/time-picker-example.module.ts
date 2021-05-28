import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePickerExampleComponent } from './time-picker-example.component';
import { TimePickerModule } from '../shared/time-picker/time-picker.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TimePickerExampleComponent
  }
];

@NgModule({
  declarations: [
    TimePickerExampleComponent
  ],
  imports: [
    CommonModule,
    TimePickerModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    RouterModule.forChild(routes)
  ]
})
export class TimePickerExampleModule { }
