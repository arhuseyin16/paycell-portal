import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";
import { TranslateService } from "@ngx-translate/core";
import { PasswordService } from "../../../services/password.service";
import { MessageService } from "../../../shared/services/message.service";


@Component({
  selector: 'app-reset-password-page',
  templateUrl: './reset-password-page.component.html',
  styleUrls: ['./reset-password-page.component.scss']
})
export class ResetPasswordPageComponent {

  resetForm = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
  });

  formSubmitted = false;
  alert: any;
  ""
  spinnerText: string;

  constructor(private spinner: NgxSpinnerService,
              public translate: TranslateService,
              private passwordService: PasswordService,
              private messageService: MessageService) {
    this.initAlert(false, null, null);
  }

  get lf() {
    return this.resetForm.controls;
  }

  onSubmit() {
    this.initAlert(false, null, null);
    this.formSubmitted = true;

    if (this.resetForm.invalid) {
      return;
    }

    this.showSpinner('reset-password.spinner.loading');
    this.passwordService
      .sendCode(this.resetForm.value.email)
      .subscribe(
        (res) => {
          this.resetSpinner();
          this.initAlert(true, "success", res.body.localizedMessage ? res.body.localizedMessage : "reset-password.message.success");
        },
        (err) => {
          this.messageService.addHttpError({
            httpErrorResponse: err,
            defaultMessage: 'reset-password.message.error'
          });
          this.resetSpinner();
          this.initAlert(true, "light-danger", "reset-password.message.error");
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

  initAlert(active: boolean, type: string, message: string): void {
    this.alert = {active, type, message: message ? message : null};
  }
}
