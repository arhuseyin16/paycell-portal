import { Component, Input, isDevMode } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpErrorResponse } from "@angular/common/http";

export interface IAlert {
  type: string;
  message: string;
}

export interface IError {
  httpErrorResponse: HttpErrorResponse,
  defaultMessage: string
}

@Component({
  selector: 'app-alert-error',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertErrorComponent {

  alert: IAlert;

  constructor(private translateService: TranslateService) {
    this.alert = null;
  }

  @Input()
  set error(error: IError) {
    this.alert = null;

    if (!error) {
      return;
    }

    const {httpErrorResponse, defaultMessage} = error;

    if (!httpErrorResponse) {
      if (defaultMessage) {
        this.addErrorAlert(this.getMessage(defaultMessage, 'Bir hata oluştu.'));
      }

      return;
    }

    switch (httpErrorResponse.status) {
      case 0:
        this.addErrorAlert(this.getMessage('error.server.not.reachable', 'Bağlantı hatası oluştu.'));
        break;

      case 400:
        this.addErrorAlert(this.getMessage('error.bad.request', 'Lütfen alanları tekrar kontrol edin.'));
        break;

      case 404:
        this.addErrorAlert(this.getMessage('error.not.found', 'Bağlantı hatası oluştu.'));
        break;

      default: {
        const error = httpErrorResponse.error;
        if (error.localizedMessage && error.localizedMessage !== '') {
          this.addErrorAlert(error.localizedMessage);
        } else if (defaultMessage && defaultMessage !== '') {
          this.addErrorAlert(this.getMessage(defaultMessage, 'Bir hata oluştu.'));
        } else if (error.message && error.message !== '') {
          this.addErrorAlert(this.getMessage(error.message, 'Bir hata oluştu.'));
        } else {
          this.addErrorAlert(this.getMessage('error.default.message', 'Bir hata oluştu.'));
        }
      }
    }
  }

  addErrorAlert(message) {
    const newAlert: IAlert = {
      type: 'light-danger',
      message: message,
    };

    this.alert = newAlert;
  }

  getMessage(messageKey, defaultMessage) {
    if (messageKey) {
      const tempMessage = this.translateService.instant(messageKey);
      if (isDevMode() || tempMessage !== messageKey) {
        return tempMessage;
      }
    }
    return defaultMessage;
  }

}
