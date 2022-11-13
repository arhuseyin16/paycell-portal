export class PfTransactionRefund {
    constructor(
        public merchantId: string,
        public productMerchantCode: string,
        public msisdn: string,
        public originalReferenceNumber: string,
        public originalAmount: number,
        public netAmount: number,
        public tranAmount: number,
        public currency: string
    ) {
    }
}
