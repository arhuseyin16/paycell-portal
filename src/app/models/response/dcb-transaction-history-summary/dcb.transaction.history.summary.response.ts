import {DcbTransactionHistorySummaryBaseResponse} from "./dcb.transaction.history.summary.base.response";

export class DcbTransactionHistorySummaryResponse {
  constructor(
    public numberOfPage: number,
    public totalCount: number,
    public pageSize: number,
    public orders: DcbTransactionHistorySummaryBaseResponse[],
  ) {
  }
}
