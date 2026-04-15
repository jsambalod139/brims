import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RequestService, Request } from '../../../services/request.services';


@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  selector: 'app-resident-reports',
  templateUrl: './resident-reports.html',
  styleUrls: ['./resident-reports.scss']
})
export class ResidentReports implements OnInit {

  activeTab: string = 'requests';
  requests: Request[] = [];

  constructor(private requestService: RequestService) {}

  ngOnInit() {
    this.requestService.requests$.subscribe(data => {
      this.requests = data;
    });
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

  get approvedPercent() {
    return this.total ? (this.approved / this.total) * 100 : 0;
  }

  get pendingPercent() {
    return this.total ? (this.pending / this.total) * 100 : 0;
  }

  get reviewPercent() {
    return this.total ? (this.review / this.total) * 100 : 0;
  }

  
}