import {
  Component,
  OnInit
} from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})
export class AddressComponent implements OnInit, ControlValueAccessor {

  form!: FormGroup;
  constructor(
    public _parent: FormGroupDirective
    // @Self() public _controlDir: NgControl
  ) {
    this.form = this._parent.form;
  }
  onChange = (quantity: number) => { };
  onTouched = () => { };

  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  writeValue(val: any): void {
    console.log(val, 'vasldls');
  }

  ngOnInit(): void {
    if (this._parent.form) {
      this.form = this._parent.form.get('address') as FormGroup;
    }
  }

}
