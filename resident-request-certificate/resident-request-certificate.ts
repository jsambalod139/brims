import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService, Request } from '../../../services/request.services';

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-resident-request-certificate',
  templateUrl: './resident-request-certificate.html',
  styleUrls: ['./resident-request-certificate.scss'],
  standalone: true
})
export class ResidentRequestCertificate implements OnInit {

  requests: Request[] = [];

  constructor(
    private requestService: RequestService,
    private router: Router
  ) {}

  ngOnInit() {
    this.requestService.requests$.subscribe((data: Request[]) => {
      this.requests = data;
    });
  }

  formData = {
    certificateType: 'Barangay Clearance',
    purpose: ''
  };

  submitRequest() {

    if (!this.formData.certificateType || !this.formData.purpose) {
      alert('Please fill all fields');
      return;
    }

    const newRequest: Request = {
      id: Date.now(),
      certificateType: this.formData.certificateType,
      purpose: this.formData.purpose,
      status: 'Pending',
      date: new Date().toLocaleString()
    };

    this.requestService.addRequest(newRequest);

    this.formData = {
      certificateType: 'Barangay Clearance',
      purpose: ''
    };

    alert('Request submitted!');
  }

  goToRequest() {
    this.router.navigate(['/res-dashboard/resident-requests']);
  }
}
