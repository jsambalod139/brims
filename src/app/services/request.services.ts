import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export interface Request {
  id: number;
  certificateType: string;
  purpose: string;
  status: string;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private requests: Request[] = [];
  private requestSubject = new BehaviorSubject<Request[]>([]);
  requests$ = this.requestSubject.asObservable();

  addRequest(req: Request) {
    this.requests.push(req);
    this.requestSubject.next(this.requests);
  }

  getRequests() {
    return this.requests;
  }

  updateStatus(id: number, status: string) {
    const request = this.requests.find(r => r.id === id);
    if (request) {
      request.status = status;
      this.requestSubject.next(this.requests);
    }
  }
}
