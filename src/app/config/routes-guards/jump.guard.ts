import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class JumpGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {
  }

  canActivate(): boolean {
    if (!(this.auth.isJump() === 'jump')) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
