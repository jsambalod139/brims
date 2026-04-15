import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffQrScanner } from './staff-qr-scanner';

describe('StaffQrScanner', () => {
  let component: StaffQrScanner;
  let fixture: ComponentFixture<StaffQrScanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffQrScanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffQrScanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
