import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMaskingComponent } from './input-masking.component';

describe('InputMaskingComponent', () => {
  let component: InputMaskingComponent;
  let fixture: ComponentFixture<InputMaskingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputMaskingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputMaskingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
