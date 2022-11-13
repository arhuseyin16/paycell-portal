import { Address } from "../address";
import { Shop } from "../shop";

export class MerchantInfoOnboardingResource {
  constructor(
    public address: Address,
    public iban: string,
    public shop: Shop
  ) {
  }
}
