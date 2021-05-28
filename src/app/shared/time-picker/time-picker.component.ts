import {
  AfterViewInit,
  Component,
  ElementRef,
  forwardRef,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors
} from '@angular/forms';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => TimePickerComponent)
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => TimePickerComponent)
    }
  ]
})
export class TimePickerComponent implements OnInit, AfterViewInit, ControlValueAccessor, ValidationErrors {

  @ViewChild('timePickerRef', { static: false }) timePickerRef!: ElementRef<any>;
  touched = false;
  time!: Date;
  disabled = false;
  noValidationError!: boolean;
  constructor() { }

  ngOnInit(): void {
  }
  onChange = (value: any) => { };

  onTouched = () => { };


  writeValue(value: any): any {
    this.time = value;
  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }
  registerOnTouched(onTouch: any): void {
    this.onTouched = onTouch;
  }
  markAsTouched(): void {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }
  onValueChange(ev: any): void {
    this.markAsTouched();
    if (ev?.target?.value) {
      const time: string = ev.target.value;
      const split = time.split(':');
      this.time = this.getTimeStamp(split);
      this.onChange(this.time);
    }
  }

  private getTimeStamp(arr: string[]): Date {
    const date = new Date();
    const hours = arr[0].length === 1 ? `0${arr[0]}` : `${arr[0]}`;
    const minutes = arr[1].length === 1 ? `0${arr[1]}` : `${arr[1]}`;
    date.setHours(+hours);
    date.setMinutes(+minutes);
    return date;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }
  getTime(date = new Date()): string {
    const hours = date.getHours().toString().length === 1 ? `0${date.getHours()}` : date.getHours();
    const mins = date.getMinutes().toString().length === 1 ? `0${date.getMinutes()}` : date.getMinutes();
    return `${hours}:${mins}`;
  }
  ngAfterViewInit(): void {
    this.timePickerRef.nativeElement.value = this.getTime();
    this.timePickerRef.nativeElement.onblur = (ev: Event) => {
      // console.log(ev, 'eveveve')
    };

  }

  validate(control: AbstractControl): ValidationErrors | any {
    const timer = control.value;
    if (timer) {
      this.noValidationError = true;
    } else {
      this.noValidationError = false;
    }
    return !timer ? { required: true } : null;
  }

}
