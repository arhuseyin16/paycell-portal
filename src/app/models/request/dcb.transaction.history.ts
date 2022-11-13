import {MerchantLevelModel} from './merchant-level-model';

export class DcbTransactionHistory {
    constructor(
        public merchantIds: Array<MerchantLevelModel>,
        public startDate: any,
        public endDate: any,
        public orderId: number,
        public fundingSourceType: string,
        public orderType: string,
        public paymentStatus: string,
        public activePage: number = 0,
    ) {
    }
}
