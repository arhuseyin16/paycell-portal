import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AccountService } from "./account.service";
import { SessionService } from "./session.service";

@Injectable({providedIn: 'root'})
export class AuthenticationAccessGuard implements CanActivate {
  constructor(
    private router: Router,
    private accountService: AccountService, private sessionService:SessionService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const auth = route.data['auth'];//none, pre, auth, full

    return of(this.checkAuth(auth, state.url));
  }

  checkAuth(auth: string, url: string): boolean {
    if (
      (auth === 'full' && this.accountService.isFullyAuthenticated())
      || (auth === 'auth' && this.accountService.isAuthenticated())
      || (auth === 'pre' && this.accountService.isPreAuthenticated())
      || (auth === 'none' && !this.accountService.isPreAuthenticated())
    ) {
      return true;
    }

    this.navigate();
    return false;

  }

  private navigate(): void {
    if (this.accountService.isFullyAuthenticated()) {
      this.router.navigate(['/pf-home']);
    } else if (this.accountService.isAuthenticated()) {
      this.router.navigate(['/pages/terminus']);
    } else {
      this.router.navigate(['/pages/login']);
    }
  }
}
