import { EventEmitter, Injectable, isDevMode } from '@angular/core';
import { HttpErrorResponse } from "@angular/common/http";
import { TranslateService } from "@ngx-translate/core";

export interface IMessage {
  message: string,
  type: string
}

export interface IHttpError {
  httpErrorResponse: HttpErrorResponse,
  defaultMessage: string
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private receiveMessage: EventEmitter<IMessage> = new EventEmitter<IMessage>();

  constructor(private translateService: TranslateService) {
  }

  public getEmitter() {
    return this.receiveMessage;
  }

  public remove(): void {
    this.receiveMessage.emit(null);
  }

  public addHttpError(httpError: IHttpError): void {
    const message = this.translateHttpError(httpError);
    if (message) {
      this.receiveMessage.emit({
        message: message,
        type: 'error'
      });
    }
  }

  public addError(messageKey): void {
    const message = this.getMessage(messageKey,messageKey);
    if (message) {
      this.receiveMessage.emit({
        message: message,
        type: 'error'
      });
    }
  }

  public addSuccess(messageKey): void {
    const message = this.getMessage(messageKey,messageKey);
    if (message) {
      this.receiveMessage.emit({
        message: message,
        type: 'success'
      });
    }
  }

  private translateHttpError(error: IHttpError): string {
    if (!error) {
      return;
    }

    const {httpErrorResponse, defaultMessage} = error;

    if (!httpErrorResponse) {
      if (defaultMessage) {
        return this.getMessage(defaultMessage, 'Bir hata oluştu.');
      }
      return;
    }

    const _error = httpErrorResponse.error;
    if (_error.localizedMessage && _error.localizedMessage !== '') {
      return _error.localizedMessage;
    } else if (defaultMessage && defaultMessage !== '') {
      return this.getMessage(defaultMessage, 'Bir hata oluştu.');
    } else if (_error.message && _error.message !== '') {
      return this.getMessage(_error.message, 'Bir hata oluştu.');
    } else {
      return this.getMessage('error.default.message', 'Bir hata oluştu.');
    }

    // switch (httpErrorResponse.status) {
    //   case 0:
    //     return this.getMessage('error.server.not.reachable', 'Bağlantı hatası oluştu.');
    //     break;
    //
    //   case 400:
    //     return this.getMessage('error.bad.request', 'Lütfen alanları tekrar kontrol edin.');
    //     break;
    //
    //   case 404:
    //     return this.getMessage('error.not.found', 'Bağlantı hatası oluştu.');
    //     break;
    //
    //   default: {
    //     const error = httpErrorResponse.error;
    //     if (error.localizedMessage && error.localizedMessage !== '') {
    //       return error.localizedMessage;
    //     } else if (defaultMessage && defaultMessage !== '') {
    //       return this.getMessage(defaultMessage, 'Bir hata oluştu.');
    //     } else if (error.message && error.message !== '') {
    //       return this.getMessage(error.message, 'Bir hata oluştu.');
    //     } else {
    //       return this.getMessage('error.default.message', 'Bir hata oluştu.');
    //     }
    //   }
    // }
  }
	 
  private getMessage(messageKey, defaultMessage) {
    if (messageKey) {
      const tempMessage = this.translateService.instant(messageKey);
      if (isDevMode() || tempMessage !== messageKey) {
        return tempMessage;
      }
    }
    return defaultMessage;
  }
}
