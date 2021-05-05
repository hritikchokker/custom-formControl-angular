import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validators
} from '@angular/forms';
import {
  Component,
  OnInit,
  forwardRef
} from '@angular/core';

@Component({
  selector: 'app-quantity-control',
  templateUrl: './quantity-control.component.html',
  styleUrls: ['./quantity-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => QuantityControlComponent)
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => QuantityControlComponent)
    }
  ]
})
export class QuantityControlComponent implements OnInit, ControlValueAccessor, ValidationErrors {
  quantity = 0;
  touched = false;
  disabled = false;
  constructor() { }


  onChange = (quantity: number) => { };

  onTouched = () => { };

  ngOnInit(): void {
  }
  toggleQuantity(flag: boolean): void {
    this.markAsTouched();
    if (!flag) {
      this.quantity--;
      this.onChange(this.quantity);
      return;
    }
    this.quantity++;
    this.onChange(this.quantity);
  }
  writeValue(quantity: number): void {
    this.quantity = quantity;
  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  markAsTouched(): void {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }
  validate(control: AbstractControl): ValidationErrors | any {
    const quantity = control.value;
    if (quantity <= 0) {
      return {
        mustBePositive: {
          quantity
        }
      };
    } else if (quantity > 10) {
      return {
        lessThanMax: {
          quantity
        }
      };
    }
  }

}
