import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { LocalStorageService, SessionStorageService } from "ngx-webstorage";

const AUTH_TOKEN_KEY = 'authenticationToken';
const PRE_AUTH_TOKEN_KEY = 'preAuthToken';

type JwtToken = {
  token: string;
};

@Injectable()
export class SessionService {

  constructor(
    public router: Router,
    private $localStorage: LocalStorageService,
    private $sessionStorage: SessionStorageService) {
  }

  getToken(): string {
    return this.$localStorage.retrieve(AUTH_TOKEN_KEY) || this.$sessionStorage.retrieve(AUTH_TOKEN_KEY);
  }

  clearToken(): void {
    this.$localStorage.clear(AUTH_TOKEN_KEY);
    this.$sessionStorage.clear(AUTH_TOKEN_KEY);
  }

  getPreAuthToken(): string {
    return this.$localStorage.retrieve(PRE_AUTH_TOKEN_KEY) || this.$sessionStorage.retrieve(PRE_AUTH_TOKEN_KEY);
  }

  clearPreAuthToken(): void {
    this.$localStorage.clear(PRE_AUTH_TOKEN_KEY);
    this.$sessionStorage.clear(PRE_AUTH_TOKEN_KEY);
  }

  preAuthSuccess(response: JwtToken): void {
    this.clearToken();
    const jwt = response.token;

    this.$localStorage.store(PRE_AUTH_TOKEN_KEY, jwt);
    // this.$sessionStorage.store(PRE_AUTH_TOKEN_KEY, jwt);
  }

  authSuccess(response: JwtToken): void {
    this.clearPreAuthToken();
    const jwt = response.token;

    this.$localStorage.store(AUTH_TOKEN_KEY, jwt);
    // this.$sessionStorage.store(AUTH_TOKEN_KEY, jwt);
  }

}
