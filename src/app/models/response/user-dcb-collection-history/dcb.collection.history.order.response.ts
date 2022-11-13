export class DcbCollectionHistoryOrderResponse {
    constructor(
        public dcbMerchantId: string,
        public dcbMerchantName: string,
        public dcbSubMerchantId: string,
        public dcbSubMerchantName: string,
        public dcbServiceId: string,
        public dcbServiceName: string,
        public orderId: number,
        public transactionId: string,
        public orderDate: string,
        public transactionAmount: number,
        public commissionAmount: number,
        public commissionRate: number,
        public fundingSourceType: string,
        public paymentType: string,
        public orderType: string,
        public paymentStatus: string,
        public merchantPaymentDate: string,
        public param1: string,
        public param2: string,
        public param3: string,
        public numberOfPage: number,
        public totalCount: number

    ) {
    }
}
