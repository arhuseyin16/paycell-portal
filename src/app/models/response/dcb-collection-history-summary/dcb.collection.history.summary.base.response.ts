export class DcbCollectionHistorySummaryBaseResponse {
  constructor(
    public dcbMerchantId: string,
    public dcbMerchantName: string,
    public dcbSubMerchantId: string,
    public dcbSubMerchantName: string,
    public dcbServiceId: string,
    public dcbServiceName: string,
    public paymentDate: string,
    public commissionType: string,
    public totalAmount: number,
    public commissionAmount: number,
    public netAmount: string,
  ) {
  }
}
