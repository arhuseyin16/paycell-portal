import {MerchantLevelModel} from './merchant-level-model';

export class DcbTransactionHistorySummary {
  constructor(
    public merchantIds: MerchantLevelModel[],
    public startDate: any,
    public endDate: any,
    public orderType: string,
    public activePage: number
  ) {
  }
}
