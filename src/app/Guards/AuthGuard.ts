import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private JwtHelper: JwtHelperService, private router: Router) { }

  canActivate(): Observable<boolean> | boolean {
    let accessToken = sessionStorage.getItem('accessToken');
    console.log(accessToken);
    if (accessToken) {
      if (!this.JwtHelper.isTokenExpired(accessToken)) {
        return true;
      }
    }
    this.router.navigateByUrl('/Login');
    return false;
  }
}
