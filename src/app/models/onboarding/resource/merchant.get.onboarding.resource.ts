import { Address } from "../address";
import { CorporateCustomer } from "../corporate.customer";
import { IndividualCustomer } from "../individual.customer";
import { Shop } from "../shop";
import { Status } from "../status";

export class MerchantGetOnboardingResource {
  constructor(
    public state: Status,
    public createDate: string,
    public lastUpdateDate: string,
    public customerType: number,
    public activeCustomer: boolean,
    public individualCustomer: IndividualCustomer,
    public corporateCustomer: CorporateCustomer,
    public address: Address,
    public shop: Shop,
    public aggrementId: string
  ) {
  }
}
