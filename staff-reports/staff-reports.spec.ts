import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffReports } from './staff-reports';

describe('StaffReports', () => {
  let component: StaffReports;
  let fixture: ComponentFixture<StaffReports>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffReports]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffReports);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
