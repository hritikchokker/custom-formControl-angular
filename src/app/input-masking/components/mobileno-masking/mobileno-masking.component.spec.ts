import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilenoMaskingComponent } from './mobileno-masking.component';

describe('MobilenoMaskingComponent', () => {
  let component: MobilenoMaskingComponent;
  let fixture: ComponentFixture<MobilenoMaskingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilenoMaskingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilenoMaskingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
