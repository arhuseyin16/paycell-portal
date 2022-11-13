import {MerchantLevelModel} from './merchant-level-model';

export class DcbCollectionHistory {
  constructor(
    public merchantIds: MerchantLevelModel[],
    public startDate: any,
    public endDate: any,
    public orderId: string,
    public fundingSourceType: string,
    public orderType: string,
    public activePage: number
  ) {
    }
}
