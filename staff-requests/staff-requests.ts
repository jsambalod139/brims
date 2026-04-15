import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestService,Request } from '../../../services/request.services';

@Component({
  selector: 'app-staff-requests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './staff-requests.html',
  styleUrl: './staff-requests.scss'
})
export class StaffRequests implements OnInit {

  requests: Request[] = [];

  constructor(private requestService: RequestService) {}

  ngOnInit() {
    this.requestService.requests$.subscribe((data: Request[]) => {
      console.log('Requests:', data); 
      this.requests = data;
    });
  }

  approve(id: number) {
    this.requestService.updateStatus(id, 'Approved');
  }

  reject(id: number) {
    this.requestService.updateStatus(id, 'Rejected');
  }
}