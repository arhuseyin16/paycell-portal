export class CorporateCustomer {
  constructor(
    public authName: string,
    public authSurname: string,
    public authTckn: string,
    public authBirthDate: string,
    public corpGsm: string,
    public contactEmail: string,
    public iban: string,
    public corpTitle: string,
    public officialTitle: string,
    public vkn: string,
    public taxOffice: string,
    public taxOfficeNumber: string,
    public masterMerhchantId: number,
    public masterMerchantProductId: number,
    public queryId: number,
    public queryDate: string,
    public companyTypeCode: number,
    public activityFieldName: string
  ) {
  }
}
