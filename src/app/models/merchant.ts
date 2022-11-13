export class Merchant {
  constructor(
    public merchantId: string,
    public legalName: string,
    public masterMerchantId: string,
    public merchantName: string,
    public hasSub: boolean
  ) {
  }


}
