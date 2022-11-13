import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {SessionService} from "../auth/session.service";
import {TranslateService} from "@ngx-translate/core";
import {AppConfig} from "../app-config/app-config";

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {
  constructor(private localStorage: LocalStorageService,
              private sessionStorage: SessionStorageService,
              private sessionService: SessionService,
              private translateService: TranslateService,
              private appConfig: AppConfig) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!request || !request.url || (request.url.startsWith('http') && !(this.appConfig.getApiServerUrl() && request.url.startsWith(this.appConfig.getApiServerUrl())))) {
      return next.handle(request);
    }

    //add current language on every request's header
    if (this.translateService.currentLang) {
      request = request.clone({
        setHeaders: {
          'Accept-Language': this.translateService.currentLang,
        },
      });
    }

    const token = this.sessionService.getToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    if (!request.url.startsWith(this.appConfig.getApiServerUrl() + '/security/login')) {
      const preAuthToken = this.sessionService.getPreAuthToken();
      if (preAuthToken) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${preAuthToken}`,
          },
        });
      }
    }
    
    return next.handle(request);
  }
}
