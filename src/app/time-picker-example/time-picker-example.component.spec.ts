import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimePickerExampleComponent } from './time-picker-example.component';

describe('TimePickerExampleComponent', () => {
  let component: TimePickerExampleComponent;
  let fixture: ComponentFixture<TimePickerExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimePickerExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimePickerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
