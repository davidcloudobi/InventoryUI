import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../authService/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private router: Router, private authservice: AuthService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
   boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.authservice.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/dashboard']);
    return false;
  }
}
