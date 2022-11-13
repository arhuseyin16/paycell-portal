export class PfTransactionsHistoryBaseResponse {
  constructor(
    public productMerchantCode: string,
    public orderId: string,
    public referenceNumber: number,
    public orderDate: string,
    public orderTime: string,
    public orderAmount: number,
    public currency: string,
    public netOrderAmount: number,
    public orderType: string,
    public orderStatus: string,
    public installmentCount: string,
    public bankResponseCode: string,
    public bankResponseCodeDesc: string,
    public acquirerBankDesc: string,
    public paymentMethodType: string,
    public issuerBankCodeDesc: string,
    public msisdn: string,
    public installmentType: string,
    public reconciliationDate: string,
    public commissionAmount: number,
    public commissionRate: number,
  ) {
  }
}
