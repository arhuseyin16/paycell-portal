import { Address } from "../address";
import { CommissionDto } from "../commisions";
import { CorporateCustomer } from "../corporate.customer";
import { IndividualCustomer } from "../individual.customer";
import { Shop } from "../shop";
import { Status } from "../status";

export class MerchantCreateOnboardingDto {
  constructor(
    public state: Status,
    public createDate: string,
    public lastUpdateDate: string,
    public customerType: string,
    public activeCustomer: boolean,
    public individualCustomer: IndividualCustomer,
    public corporateCustomer: CorporateCustomer,
    public address: Address,
    public shop: Shop,
    public aggrementId: string,
    public commissions: CommissionDto
  ) {
  }
}
