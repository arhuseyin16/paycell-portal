import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from 'app/shared/auth/auth.service';
import { NgxSpinnerService } from "ngx-spinner";
import { TranslateService } from "@ngx-translate/core";
import { PasswordService } from "../../../services/password.service";
import { MessageService } from "../../../shared/services/message.service";
import { BrowserService } from 'app/shared/services/browser.service';


@Component({
  selector: 'app-change-password-page',
  templateUrl: './change-password-page.component.html',
  styleUrls: ['./change-password-page.component.scss']
})
export class ChangePasswordPageComponent {

  form = new FormGroup({
    newPassword: new FormControl(null, [Validators.required]),
    newPasswordRetype: new FormControl(null, [Validators.required]),
  });

  formSubmitted = false;
  alert: any;
  spinnerText: string;

  token: string;
  isResetProcess: boolean;

  newPasswordInputType = "password";
  retypeNewPasswordInputType = "password";
  PasswordType: typeof Password;
  browserName = "";

  constructor(private router: Router,
              private authService: AuthService,
              private spinner: NgxSpinnerService,
              public translate: TranslateService,
              private passwordService: PasswordService,
              private route: ActivatedRoute,
              private messageService: MessageService,
              private browserService: BrowserService) {
    this.initAlert(false, null);

    this.route.data.subscribe(routeData => {
      if (routeData.type === 'expired') {
        this.isResetProcess = false;
        this.form.valueChanges.subscribe((asd) => this.checkFieldsEquality(asd, this.form), null);
      } else if (routeData.type === 'reset') {
        this.isResetProcess = true;
        this.form.valueChanges.subscribe((asd) => this.checkFieldsEquality(asd, this.form), null);
        this.route.queryParams
          .subscribe(params => {
              this.token = params['token'];
              this.verifyCode();
            }
          );
      } else {
        this.router.navigate(['']);
      }
    });

    this.PasswordType = Password
    this.subscribeBrowserName();
  }

  subscribeBrowserName() {
    this.browserService.browserName.subscribe(res => {
      this.browserName = res;
    });
  }

  get lf() {
    return this.form.controls;
  }

  verifyCode() {
    this.initAlert(false, null);
    this.showSpinner('change-password.spinner.loading');

    this.passwordService.verifyCode(this.token)
      .subscribe(
        (response) => {
          this.resetSpinner();

          if (['invalid', 'confirmed', 'expired'].includes(response.body?.status)) {
            this.initAlert(true, 'change-password.message.' + response.body.status);
          }
        },
        (err) => {
          this.messageService.addHttpError({
            httpErrorResponse: err,
            defaultMessage: 'change-password.message.error'
          });
          this.resetSpinner();
          // if (err.status === 404 || err.status === 500)
          this.initAlert(true, "change-password.message.server-error");
        }
      );
  }

  checkFieldsEquality(formControls, form: FormGroup) {
    const keys = Object.keys(formControls);

    if (formControls[keys[0]] !== formControls[keys[1]]) {
      this.setControlError(form.controls[keys[0]], true);
      this.setControlError(form.controls[keys[1]], true);
    } else {
      this.setControlError(form.controls[keys[0]], null);
      this.setControlError(form.controls[keys[1]], null);
    }
  }

  setControlError(control, error) {
    if (error) {
      let errors = control.errors ? control.errors : {};
      errors['equal'] = true;
      control.setErrors(errors);
    } else if (control.errors) {
      delete control.errors['equal'];
      if (Object.keys(control.errors).length === 0) {
        control.setErrors(null);
      }
    }
  }

  onSubmit() {
    this.initAlert(false, null);
    this.formSubmitted = true;

    if (this.form.invalid) {
      return;
    }

    this.showSpinner('change-password.spinner.changing');

    (this.isResetProcess ?
      this.passwordService.updateByReset(this.token, this.form.value.newPassword) :
      this.authService.changeExpiredPass(this.form.value.newPassword))
      .subscribe(
        (res) => {
          this.resetSpinner();
          this.initAlert(true, "change-password.message.success");

          if (!this.isResetProcess) {
            this.router.navigate(['/pages/merchant']);
          }
        },
        (err) => {
          this.messageService.addHttpError({
            httpErrorResponse: err,
            defaultMessage: 'change-password.message.error'
          });
          this.resetSpinner();
        }
      );
  }


  showSpinner(text: string): void {
    this.spinnerText = text;
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
  }

  resetSpinner(): void {
    this.spinnerText = null;
    this.spinner.hide();
  }

  initAlert(active: boolean, message: string): void {
    this.alert = {active, message: message ? message : null};
  }

  changePasswordInputType(type: Password) {
    switch (type) {
      case Password.newPassword:
        this.newPasswordInputType === "password" ? this.newPasswordInputType = "text" : this.newPasswordInputType = "password";
        break;
      case Password.retypeNewPassword:
        this.retypeNewPasswordInputType === "password" ? this.retypeNewPasswordInputType = "text" : this.retypeNewPasswordInputType = "password";
        break;
      default:
        break;
    }
  }
}

enum Password {
  newPassword,
  retypeNewPassword
}
