import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private http: HttpClient) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token'); //needs to be a post
    this.router.navigate(['login']);
  }

  // Comment this login function and uncomment the login function from below
  // In the return statement of the login function add the backend login endpoint you want to connect to
  // Also uncomment the getAccessClaims function that will enable you to decode the Bearer token that comes from the Backend
  login({ email, password }: any): Observable<any> {
    if (email === 'admin@admin.com' && password === '123') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ name: 'Admin RAVDatum', email: 'admin@admin.com' });
    }
    const err = new Error('Failed to login');
    return throwError(() => err);
  }

  // login(email: string, password: string): Observable<any> {
  //   const credentials: { email: string; password: string } = {
  //     email: email,
  //     password: password,
  //   };
  //   return this.http.post('https://api.example.com/endpoint', credentials);
  // }

  // getAccessClaims(): any {
  //   const encodedToken = this.getToken()!.split('.');
  //   const decodedPayload = Buffer.from(encodedToken[1], 'base64').toString(
  //     'utf-8'
  //   );
  //   const payload = JSON.parse(decodedPayload);
  //   return payload;
  // }
}
