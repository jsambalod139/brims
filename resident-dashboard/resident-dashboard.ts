import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RequestService, Request } from '../../../services/request.services';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-resident-dashboard',
  templateUrl: './resident-dashboard.html',
  styleUrls: ['./resident-dashboard.scss']
})
export class ResidentDashboard implements OnInit {

  residentName: string = "Jon Charles Sambalod";
  selectedStatus: string = 'All';
  requests: Request[] = [];

  constructor(
    private router: Router,
    private requestService: RequestService
  ) {}

  ngOnInit() {
    this.requestService.requests$.subscribe(data => {
      this.requests = data;
    });
  }

  goToProfile(){
    this.router.navigate(['/res-dashboard/resident-myprofile']);
  }

  goToCertificate(){
    this.router.navigate(['/res-dashboard/resident-request-certificate']);
  }

  goToRequests(){
    this.router.navigate(['/res-dashboard/resident-requests']);

  }
  
  get filteredRequests() {
    if (this.selectedStatus === 'All') {
      return this.requests;
    }
    return this.requests.filter(req => req.status === this.selectedStatus);
}
}