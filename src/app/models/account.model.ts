import { UserMerchant } from "./request/user.merchant";

export class Account {
  constructor(
    public login: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public msisdn: string,
    public imageUrl: string,
    public langKey: string,
    public authorities: string[],
    public master: UserMerchant,
    public isSuperAdmin: boolean,
    public isBoUser: boolean,
    public customerType: string,
    public isMpMerchant: boolean,
    public isPayWithLinkActive: boolean,
    public userId: number,
  ) {
  }
}
