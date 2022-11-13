import {DcbTransactionHistoryOrderResponse} from "../user-dcb-transaction-history/dcb.transaction.history.order.response";
import {DcbCollectionHistoryOrderResponse} from "./dcb.collection.history.order.response";

export class DcbCollectionHistoryResponse {
  constructor(
    public numberOfPage: number,
    public totalCount: number,
    public pageSize: number,
    public orders: DcbCollectionHistoryOrderResponse[],
  ) {
  }
}
