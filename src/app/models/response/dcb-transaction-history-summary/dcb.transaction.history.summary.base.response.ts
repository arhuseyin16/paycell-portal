export class DcbTransactionHistorySummaryBaseResponse {
  constructor(
    public dcbMerchantId: string,
    public dcbMerchantName: string,
    public dcbSubMerchantId: string,
    public dcbSubMerchantName: string,
    public dcbServiceId: string,
    public dcbServiceName: string,
    public orderDate: string,
    public orderType: string,
    public totalCount: number,
    public totalAmount: number,
    public totalCommissionAmount: number,
  ) {
  }
}
