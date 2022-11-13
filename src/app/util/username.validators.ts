import { AbstractControl, Validators } from "@angular/forms";

const PHONE_REGEXP = /^[0-9]{10}$/;

export function usernameValidator(control: AbstractControl) {
  if (control != null && !(control.value == null || control.value.length === 0)) {
    if (!Validators.email(control)) {
      return null;
    }
    if (PHONE_REGEXP.test(control.value)) {
      return null;
    }
    return {pattern: true};
  }
  return null;
}
