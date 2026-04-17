import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RequestService, Request } from '../../../services/request.services';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  selector: 'app-resident-requests',
  templateUrl: './resident-requests.html',
  styleUrls: ['./resident-requests.scss']
})
export class ResidentRequests implements OnInit {

  requests: Request[] = [];
  filteredRequests: Request[] = [];

  searchTerm = '';
  statusFilter = '';
  sortBy = 'date';

  constructor(private requestService: RequestService) {}

  ngOnInit() {
    this.requestService.requests$.subscribe(data => {
      this.requests = data;
      this.applyFilters();
    });
  }

  applyFilters() {
    let data = [...this.requests];

    if (this.searchTerm) {
      data = data.filter(r =>
        
        r.certificateType.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        r.purpose.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    if (this.statusFilter) {
      data = data.filter(r => r.status === this.statusFilter);
    }

    if (this.sortBy === 'date') {
      data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    if (this.sortBy === 'type') {
      data.sort((a, b) => a.certificateType.localeCompare(b.certificateType));
    }

    if (this.sortBy === 'status') {
      data.sort((a, b) => a.status.localeCompare(b.status));
    }

    this.filteredRequests = data;
  }

  setSort(type: string) {
    this.sortBy = type;
    this.applyFilters();
  }


  get total() {
    return this.requests.length;
  }

  get approved() {
    return this.requests.filter(r => r.status === 'Approved').length;
  }

  get pending() {
    return this.requests.filter(r => r.status === 'Pending').length;
  }

  get review() {
    return this.requests.filter(r => r.status === 'Rejected').length;
  }
}