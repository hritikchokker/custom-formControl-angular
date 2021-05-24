import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MyTel } from './components/mobileno-masking/mobileno-masking.component';

@Component({
  selector: 'app-input-masking',
  templateUrl: './input-masking.component.html',
  styleUrls: ['./input-masking.component.scss']
})
export class InputMaskingComponent implements OnInit {

  form: FormGroup = new FormGroup({
    tel: new FormControl(new MyTel('', '', ''))
  });

  constructor() {

  }

  ngOnInit(): void {
  }

}
