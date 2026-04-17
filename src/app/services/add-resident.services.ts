import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Resident {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  age: string;
  gender: string;
  birthdate: string;
  placeOfBirth: string;
  birthCert: string;
  bloodType: string;
  civilStatus: string;
  nationality: string;
  email: string;
  password: string;
  contact: string;
  address: string;
  purok: string;
}

@Injectable({
  providedIn: 'root'
})
export class ResidentService {

  private residentsSubject = new BehaviorSubject<Resident[]>([]);
  residents$ = this.residentsSubject.asObservable();

  // ➕ ADD RESIDENT
  addResident(data: Resident) {
    const current = this.residentsSubject.value;

    this.residentsSubject.next([
      ...current,
      {
        ...data,
        id: 'BRGY-' + (current.length + 1001) // auto ID
      }
    ]);
  }
}