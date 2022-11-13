import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AccountService } from "./account.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private accountService: AccountService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let isAuth = this.accountService.isAuthenticated();
    if (!isAuth) {
      this.router.navigate(['/pages/login']);
    }
    else {
      return true;
    }
  }
}
