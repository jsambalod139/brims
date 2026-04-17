import { Component } from '@angular/core';
import { Contents } from '../../contents/contents';
import { StaffSidebar } from '../staff-sidebar/staff-sidebar';
import { StaffTopbar } from '../staff-topbar/staff-topbar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sta-dashboard',
  imports: [StaffSidebar,StaffTopbar,RouterOutlet],
  templateUrl: './sta-dashboard.html',
  styleUrl: './sta-dashboard.scss',
})
export class StaDashboard {

}
