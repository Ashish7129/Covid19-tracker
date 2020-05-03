import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  authenticated = false;

  // tslint:disable-next-line: ban-types
  public isAuthenticated(): boolean {
    if (null != localStorage.getItem('email')) {
      this.authenticated = true;
    } else {
      this.authenticated = false;
    }
    return this.authenticated;
  }
}
