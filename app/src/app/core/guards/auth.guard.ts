import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import { UserModel } from '../models/user.model';

@Injectable()
export class AuthGuard implements CanActivate {

  user: UserModel;

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.user == null) {
        return false;
      }
      
    return true;
  }

  constructor(private authService: AuthService) {
    this.authService.User.subscribe(user => this.user = user);
  }
}
