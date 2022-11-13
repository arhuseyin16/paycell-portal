import {DcbTransactionHistoryOrderResponse} from './dcb.transaction.history.order.response'
export class DcbTransactionHistoryResponse {
    constructor(
        public numberOfPage: number,
        public totalCount: number,
        public pageSize: number,
        public orders: DcbTransactionHistoryOrderResponse[],

    ) {}
}


