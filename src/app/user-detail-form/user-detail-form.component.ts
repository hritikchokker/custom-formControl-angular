import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-detail-form',
  templateUrl: './user-detail-form.component.html',
  styleUrls: ['./user-detail-form.component.scss']
})
export class UserDetailFormComponent implements OnInit {

  detailForm!: FormGroup;
  constructor(
    private _fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm(): void {
    this.detailForm = this._fb.group({
      firstName: [''],
      lastName: [''],
      age: [''],
      mobile: [''],
      address: this._fb.group({
        street: [''],
        city: [''],
        state: ['']
      }),
    });
  }
  ngOnInit(): void {
  }

}
