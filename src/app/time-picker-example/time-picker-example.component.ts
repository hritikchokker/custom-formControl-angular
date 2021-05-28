import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-time-picker-example',
  templateUrl: './time-picker-example.component.html',
  styleUrls: ['./time-picker-example.component.scss']
})
export class TimePickerExampleComponent implements OnInit {

  formGroup!: FormGroup;
  constructor(private _fb: FormBuilder) {
    this.formGroup = this._fb.group({
      timer: ['', [Validators.required]]
    });
  }
  get timeControl(): AbstractControl {
    return this.formGroup.controls.timer;
  }

  ngOnInit(): void {

  }

}
