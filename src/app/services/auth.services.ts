import { Injectable } from '@angular/core';

export interface User {
  email: string;
  password: string;
  role: 'admin' | 'staff' | 'resident';
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // 🔥 Hardcoded users (for testing)
  private users: User[] = [
    { email: 'admin@gmail.com', password: 'admin123', role: 'admin' },
    { email: 'staff@gmail.com', password: 'staff123', role: 'staff' },
    { email: 'resident@gmail.com', password: 'res123', role: 'resident' }
  ];

  // ✅ LOGIN FUNCTION
  login(email: string, password: string): User | null {
    const user = this.users.find(
      u => u.email === email && u.password === password
    );

    return user || null;
  }
}