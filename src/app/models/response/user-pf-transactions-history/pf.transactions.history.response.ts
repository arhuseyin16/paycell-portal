import {PfTransactionsHistoryBaseResponse} from "./pf.transactions.history.base.response";

export class PfTransactionsHistoryResponse {
  constructor(
    public numberOfPage: number,
    public totalCount: number,
    public historyTransactions: PfTransactionsHistoryBaseResponse[],
  ) {
  }
}
