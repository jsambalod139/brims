import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-staff-residents',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './staff-residents.html',
  styleUrl: './staff-residents.scss'
})
export class StaffResidents {
  search = '';
  gender = '';
  age = '';
  purok = '';
}
