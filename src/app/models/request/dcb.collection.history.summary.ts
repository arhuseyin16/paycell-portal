import {MerchantLevelModel} from './merchant-level-model';

export class DcbCollectionHistorySummary {
  constructor(
    public merchantIds: MerchantLevelModel[],
    public startDate: any,
    public endDate: any,
    public activePage: number
  ) {
  }
}
