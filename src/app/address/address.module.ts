
import { AddressComponent } from './address.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AddressComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatIconModule,
    MatInputModule
  ], exports: [ReactiveFormsModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatIconModule,
    AddressComponent,
    MatInputModule]
})
export class AddressModule { }
