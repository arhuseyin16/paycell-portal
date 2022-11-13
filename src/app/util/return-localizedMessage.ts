import {HttpErrorResponse} from '@angular/common/http';

export const ReturnLocalizedMessage = (err: HttpErrorResponse) => {
  const staticMessage = 'Bilinmeyen Bir Hata.'
  if (err.error.localizedMessage) {
    const splitErrorMessage = err.error.localizedMessage.split('[');
    return splitErrorMessage[0];
  } else {
    return staticMessage;
  }
}
