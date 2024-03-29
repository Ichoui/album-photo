import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MapleGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {
  }

  canActivate(): boolean {
    if (!(this.auth.isMaple() === 'maple')) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
