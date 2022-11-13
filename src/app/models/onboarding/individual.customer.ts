export class IndividualCustomer {
  constructor(
    public name: string,
    public surname: string,
    public tckn: string,
    public birthDate: string,
    public iban: string,
    public email: string,
    public gsm: string,
    public masterMerhchantId: number,
    public masterMerchantProductId: number
  ) {
  }
}
