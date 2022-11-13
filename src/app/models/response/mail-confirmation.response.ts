import { MailValidationHeader } from "./mail-validation-header.model";

export class MailConfirmationResponse {
  mailValidationHeader: MailValidationHeader;
  status: boolean;
}
