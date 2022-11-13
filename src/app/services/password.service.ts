import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from "../shared/app-config/app-config";

const sendCodeURL =  '/api/password/reset/sendCode';
const verifyCodeURL =  '/api/password/verifyCode';
const updateByResetURL =  '/api/password/reset/update';
const updateURL =  '/api/password/update';

@Injectable({providedIn: 'root'})
export class PasswordService {
  constructor(private http: HttpClient,
			  private appConfig: AppConfig) {
  }

  sendCode(email: string): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.appConfig.formatPath(sendCodeURL), {email}, {observe: 'response'});
  }

  verifyCode(code: string): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.appConfig.formatPath(verifyCodeURL), {code}, {observe: 'response'});
  }

  updateByReset(code: string, newPassword: string): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.appConfig.formatPath(updateByResetURL), {code, newPassword}, {observe: 'response'});
  }

  update(oldPassword: string, newPassword: string): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.appConfig.formatPath(updateURL), {oldPassword, newPassword}, {observe: 'response'});
  }

}
