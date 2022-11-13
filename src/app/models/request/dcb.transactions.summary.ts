import {MerchantLevelModel} from './merchant-level-model';

export class DcbTransactionsSummary {
  constructor(
    public startDate: any,
    public endDate: any,
    public merchantIds: MerchantLevelModel[],
  ) {
  }
}
