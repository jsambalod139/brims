import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-staff-households',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './staff-households.html',
  styleUrl: './staff-households.scss'
})
export class StaffHouseholds {
  search = '';
  purok = '';
}