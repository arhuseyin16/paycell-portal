import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { AccountService } from "app/shared/auth/account.service";
import { Login } from "app/models/auth/login.model";
import { map, switchMap } from 'rxjs/operators';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { SendOtp } from "../../models/auth/send-otp.model";
import { SessionService } from "./session.service";
import { AppConfig } from "../app-config/app-config";

const SEND_OTP_URL =  '/security/sendOtp';
const HAS_ACTIVE_OTP_URL =  '/security/hasActiveOtp';
const LOGIN_URL =  '/security/login';
const LOGOUT_URL =  '/security/logout';
const VALIDATE_OTP_URL =  '/security/validateOtp';
const CHANGE_EXPIRED_PASS_URL =  '/security/changeExpiredPass';

type JwtToken = {
  token: string;
  customerType: string;
};

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
    public router: Router,
    private accountService: AccountService,
    private sessionService: SessionService,
	private appConfig: AppConfig
  ) {

  }

  /**
   * validates username and password and gets back pre auth token
   */
  login(login: Login): Observable<any | null> {
    return this.http
      .post<JwtToken>(this.appConfig.formatPath(LOGIN_URL), login)
      .pipe(map(response => this.sessionService.preAuthSuccess(response)));
  }

  sendOtp(): Observable<HttpResponse<SendOtp>> {
    return this.http
      .post<SendOtp>(this.appConfig.formatPath(SEND_OTP_URL), null, {observe: 'response'});
  }

  hasActiveOtp(): Observable<HttpResponse<SendOtp>> {
    return this.http
      .post<SendOtp>(this.appConfig.formatPath(HAS_ACTIVE_OTP_URL), null, {observe: 'response'});
  }

  validateOtp(otp: string): Observable<any | null> {
    return this.http
      .post<JwtToken>(this.appConfig.formatPath(VALIDATE_OTP_URL), {token: otp}, {observe: 'response'})
      .pipe(switchMap(response => {
        if (response.status === 204) {
          return of({passExpired: true});
        } else if (response.status === 200 && response.body) {
          // && this.parseToken(response.body.token)['pe']
          this.sessionService.authSuccess(response.body);
          return of({passExpired: false});
        } else {
          return throwError('service.error');
        }
      }))
    // .pipe(map(response => this.authSuccess(response)))
    // .pipe(mergeMap(() => this.accountService.identity(true)));
  }

  changeExpiredPass(newPassword: string): Observable<any | null> {
    return this.http
      .post<JwtToken>(this.appConfig.formatPath(CHANGE_EXPIRED_PASS_URL), {newPassword}, {observe: 'response'})
      .pipe(map(response => this.sessionService.authSuccess(response.body)));
  }

  logout(): void {

    const doIt = () => {
      this.sessionService.clearPreAuthToken();
      this.sessionService.clearToken();

      this.accountService.authenticate(null);
      this.router.navigate(['']);
    };

    this.http
      .post<JwtToken>(this.appConfig.formatPath(LOGOUT_URL), null, {observe: 'response'})
      .subscribe(doIt, doIt);
  }

  logoutWithout(): void {
    this.sessionService.clearPreAuthToken();
    this.sessionService.clearToken();

    this.accountService.authenticate(null);
    this.router.navigate(['']);
  }


  private parseToken(token: string): any {

    if (token) {
      const split = token.split('.');
      if (split.length === 3) {
        return JSON.parse(atob(split[1]));
      }
    }
    return null;
  }

}
