import {MerchantIdsModel} from './merchantIds.model';

export class PfTransactionsHistory {
  constructor(
    public merchantIds: Array<MerchantIdsModel>,
    public activePage: number,
    public startDate: any,
    public endDate: any,
    public orderId: string,
    public orderType: string,
    public orderStatus: string,
    public installmentType: string
  ) {
  }
}
