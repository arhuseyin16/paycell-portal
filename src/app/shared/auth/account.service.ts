import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SessionStorageService } from 'ngx-webstorage';
import { Observable, ReplaySubject, of } from 'rxjs';
import { shareReplay, tap, catchError } from 'rxjs/operators';

import { Account } from 'app/models/account.model';
import { TranslateService } from '@ngx-translate/core';
import { SessionService } from './session.service';
import { AppConfig } from '../app-config/app-config';
import {UserMerchantRequest} from '../../models/request/user-merchant-request';
import {UserMerchantResponse} from '../../models/response/user-merchant-response';
import {POTENTIAL_CUSTOMER_TYPE} from '../../app.constants';
// import { JhiLanguageService } from 'ng-jhipster';
// import { StateStorageService } from 'app/core/auth/state-storage.service';
// import { TrackerService } from '../tracker/tracker.service';

const ACCOUNT_PATH = '/api/account';
const user_merchant = '/api/account/merchants';

@Injectable({providedIn: 'root'})
export class AccountService {
  private userIdentity: Account | null = null;
  private authenticationState = new ReplaySubject<Account | null>(1);
  private accountCache$?: Observable<Account | null>;
  userMerchantRequest: UserMerchantRequest = new UserMerchantRequest();

  constructor(
    private sessionStorage: SessionStorageService,
    private translate: TranslateService,
    private sessionService: SessionService,
    private http: HttpClient,
    private appConfig: AppConfig
  ) {
   this.getUserMerchantModel();
  }

  getUserMerchantModel() {
    const merchantName = JSON.parse(localStorage.getItem('merchantName'));
    this.userMerchantRequest = {
      merchantId: merchantName ? merchantName.merchantId : null
    }
  }

  authenticate(identity: Account | null): void {
    this.userIdentity = identity;
    this.authenticationState.next(this.userIdentity);
    if (identity) {
      // this.trackerService.connect();
    } else {
      // this.trackerService.disconnect();
    }
  }

  hasAnyAuthority(authorities: string[] | string): boolean {
    if (!this.userIdentity || !this.userIdentity.authorities) {
      return false;
    }
    if (!Array.isArray(authorities)) {
      authorities = [authorities];
    }
    return this.userIdentity.authorities.some((authority: string) => authorities.includes(authority));
  }

  identity(force?: boolean): Observable<Account | null> {
    if (!this.accountCache$ || force || !this.isAuthenticated()) {
      this.getUserMerchantModel();
      this.accountCache$ = this.getAccount().pipe(
        catchError(() => {
          return of(null);
        }),
        tap((account: Account | null) => {
          this.authenticate(account);

          // account.customerType = '2';
          // After retrieve the account info, the language will be changed to
          // the user's preferred language configured in the account setting
          if (account && account.langKey) {
            const langKey = this.sessionStorage.retrieve('locale') || account.langKey;
            // this.languageService.changeLanguage(langKey);
            this.translate.use(langKey);
          }

          if (account) {
            this.navigateToStoredUrl();
          }
        }),
        shareReplay()
      );
    }
    return this.accountCache$;
  }

  isAuthenticated(): boolean {
    return this.sessionService.getToken() !== null;
  }

  isFullyAuthenticated(): boolean {
    return this.isAuthenticated() && this.userIdentity !== null;
  }

  isPreAuthenticated(): boolean {
    return this.sessionService.getPreAuthToken() !== null && !this.isAuthenticated();
  }

  // is not in two factor authentication step nor authenticated
  isAnonymous() {
    // return !this.isAuthenticated() && !this.isPreAuthenticated();
  }

  getAuthenticationState(): Observable<Account | null> {
    return this.authenticationState.asObservable();
  }

  getImageUrl(): string {
    return this.userIdentity ? this.userIdentity.imageUrl : '';
  }

  getUserName(): string {
  //  return this.userIdentity ? this.userIdentity.firstName + ' ' + this.userIdentity.lastName : '';
    const account = JSON.parse(localStorage.getItem('account'));
    if (account?.customerType !== POTENTIAL_CUSTOMER_TYPE.toString()) {
      return  account?.firstName && account?.lastName ? account.firstName + ' ' + account.lastName : account?.email;
    } else {
      return account?.email ? account.email : '';
    }
  }

  getUserMerchant(): string {
    const merchantName = JSON.parse(localStorage.getItem('merchantName'));
    // return this.userIdentity && this.userIdentity.master ? this.userIdentity.master.merchantName : '';
    return merchantName ? merchantName?.merchantName : ' ';
  }

  private getAccount(): Observable<Account> {
    return this.http.post<Account>(this.appConfig.formatPath(ACCOUNT_PATH), this.userMerchantRequest);
  }

  getUserAllMerchants(): Observable<UserMerchantResponse> {
    return this.http.get<UserMerchantResponse>(this.appConfig.formatPath(user_merchant));
  }

  private navigateToStoredUrl(): void {
    // previousState can be set in the authExpiredInterceptor and in the userRouteAccessService
    // if login is successful, go to stored previousState and clear previousState
    // const previousUrl = this.stateStorageService.getUrl();
    // if (previousUrl) {
    //   this.stateStorageService.clearUrl();
    //   this.router.navigateByUrl(previousUrl);
    // }
  }
}
