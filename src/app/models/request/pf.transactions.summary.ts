import {MerchantIdsModel} from './merchantIds.model';

export class PfTransactionsSummary {
  constructor(
    public startDate: any,
    public endDate: any,
    public merchantIds: Array<MerchantIdsModel>
  ) {
  }
}
