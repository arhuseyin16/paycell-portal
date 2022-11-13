import { ChangeDetectorRef, Component, isDevMode } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from 'app/shared/auth/auth.service';
import { NgxSpinnerService } from "ngx-spinner";
import { TranslateService } from "@ngx-translate/core";
import { Login } from "../../../models/auth/login.model";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { SessionService } from "../../../shared/auth/session.service";
import { usernameValidator } from "../../../util/username.validators";
import { MessageService } from "../../../shared/services/message.service";
import { AppConfig } from "../../../shared/app-config/app-config";
import { BrowserService } from 'app/shared/services/browser.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent {

  loginFormSubmitted = false;

  loginForm = new FormGroup({
    username: new FormControl(null, [Validators.required, usernameValidator]),
    password: new FormControl(null, [Validators.required]),
    rememberMe: new FormControl(false)
  });

  passwordInputType = "password";
  isPasswordAutoCompleted = true;
  browserName = "";

  constructor(private router: Router,
    private authService: AuthService,
    private sessionService: SessionService,
    private spinner: NgxSpinnerService,
    public translate: TranslateService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
    private messageService: MessageService,
    private appConfig: AppConfig,
    private browserService: BrowserService) {

    this.sessionService.clearToken();
    this.sessionService.clearPreAuthToken();
    localStorage.removeItem('type');
    localStorage.removeItem('merchantName');
    localStorage.removeItem('merchantLength');
    localStorage.removeItem('account');


    this.subscribeBrowserName();
  }

  subscribeBrowserName() {
    this.browserService.browserName.subscribe(res => {
      this.browserName = res;
    });
  }

  get lf() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.messageService.remove();
    this.loginFormSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.showSpinner();

    this.authService
      .login(new Login(this.loginForm.value.username, this.loginForm.value.password))
      .subscribe(
        (res) => {
          this.spinner.hide();
          this.router.navigate(['/pages/otp']);
        },
        (err) => {
          this.messageService.addHttpError({
            httpErrorResponse: err,
            defaultMessage: 'login.error.message'
          });
          if (err.error.status === 403) {
            this.lf.password.setValue(null);
          }
          this.spinner.hide();
        }
      );
  }

  isDevMode() {
    return isDevMode();
  }

  onDirect() {
    isDevMode()
    {
      this.messageService.remove();
      this.loginFormSubmitted = true;
      if (this.loginForm.invalid) {
        return;
      }

      this.showSpinner();

      return this.http
        .post<any>(this.appConfig.getApiServerUrl() + '/security/loginn', {
          username: this.loginForm.value.username,
          password: this.loginForm.value.password
        })
        .pipe(map(response => this.sessionService.authSuccess(response)))
        .subscribe(
          (res) => {
            this.spinner.hide();
            this.router.navigate(['/pages/terminus']);
          },
          (err) => {
            this.messageService.addHttpError({
              httpErrorResponse: err,
              defaultMessage: 'login.error.message'
            });

            this.sessionService.clearToken();
            this.spinner.hide();
          }
        );
    }
  }

  changePasswordInputType() {
    if (this.passwordInputType === "password") this.passwordInputType = "text";
    else this.passwordInputType = "password";
  }

  setPasswordVisible() {
    setTimeout(() => {
      if (this.isPasswordAutoCompleted && !this.lf.password.value) {
        this.isPasswordAutoCompleted = false;
      }
    });
  }

  onPasswordFocus() {
    this.setPasswordVisible();
  }

  onPasswordBlur() {
    this.setPasswordVisible();
  }

  onPasswordChange(e: any) {
    if (!e) this.setPasswordVisible();
  }

  showSpinner() {
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
  }

}
