import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('album');
    // Check whether the token is expired and return
    // true or false
    if (token === 'maple123' || token === 'banff123') {
      return true;
    } else {
      return false;
    }
  }

  public logout() {
    localStorage.removeItem('album');
  }

  public WriteLocalStorage(album, rand): void {
    localStorage.setItem('album', album + rand);
  }


}
