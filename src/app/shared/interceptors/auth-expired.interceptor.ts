import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { AuthService } from "../auth/auth.service";
import { SessionService } from "../auth/session.service";
import { MessageService } from "../services/message.service";

@Injectable()
export class AuthExpiredInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      tap(null, (err: HttpErrorResponse) => {

        if (err.status === 401 && err.url) {
          if(err.url.includes('security/')){
            this.authService.logoutWithout();
            return;
          }

          this.authService.logout();
          this.messageService.addError('error.unauthorized.message');
        }
        //
        // if (err.status === 401 && err.url && !err.url.includes('security/account')) {
        //   // this.stateStorageService.storeUrl(this.router.routerState.snapshot.url);
        //   this.authService.logout();
        //   this.router.navigate(['']);
        //   // this.loginModalService.open();
        // }

      })
    );
  }
}
