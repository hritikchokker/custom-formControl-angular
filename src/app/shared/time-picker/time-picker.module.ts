import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePickerComponent } from './time-picker.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    TimePickerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ], exports: [TimePickerComponent]
})
export class TimePickerModule { }
