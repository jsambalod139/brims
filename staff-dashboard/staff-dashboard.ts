import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-dashboard',
  templateUrl: './staff-dashboard.html',
  styleUrls: ['./staff-dashboard.scss']
})
export class StaffDashboard {

  totalResidents = 0;
  totalHouseholds = 0;
  seniorCitizens = 0;

  constructor(private router: Router) {}

  viewRequests() {
    this.router.navigate(['/sta-dashboard/staff-requests']);
  }
}