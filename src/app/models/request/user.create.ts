import { RelatedMerchant } from "./related.merchant";

export class UserCreate {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public msisdn: string,
    public nationalNumber: string,
    public birthDate: string,
    public relatedMerchant: RelatedMerchant,
    public authorities: string[],
    public roles: string[]
  ) {
  }
}
