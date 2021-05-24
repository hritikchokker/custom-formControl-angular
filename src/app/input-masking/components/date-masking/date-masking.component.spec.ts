import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateMaskingComponent } from './date-masking.component';

describe('DateMaskingComponent', () => {
  let component: DateMaskingComponent;
  let fixture: ComponentFixture<DateMaskingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateMaskingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateMaskingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
