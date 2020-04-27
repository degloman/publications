import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable()
export class AuthService {
  private _authorized: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  login(user: string, password: string): boolean {
    if (user === 'admin@admin.com' && password === 'admin') {
      localStorage.setItem('username', user);
      localStorage.setItem('password', password);
      this._authorized.next(true);
      return true;
    }
    this._authorized.next(false);
    return false;
  }
  logout() {
    localStorage.clear();
    this._authorized.next(false);
  }

  get Authorized() {
    return this._authorized;
  }

  LoadAuthState() {
    if (localStorage.getItem('username') && localStorage.getItem('password')) {
      this._authorized.next(true);
    } else {
      this._authorized.next(false);
    }
    return of(true).toPromise();
  }
}
