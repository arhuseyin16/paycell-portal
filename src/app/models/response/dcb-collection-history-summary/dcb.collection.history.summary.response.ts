import {DcbCollectionHistorySummaryBaseResponse} from "./dcb.collection.history.summary.base.response";

export class DcbCollectionHistorySummaryResponse {
  constructor(
    public numberOfPage: number,
    public totalCount: number,
    public pageSize: number,
    public collections: DcbCollectionHistorySummaryBaseResponse[],
  ) {
  }
}
