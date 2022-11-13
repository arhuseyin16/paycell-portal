import {TotalSummary} from './total.summary';
import {SuccessSaleCount} from './success.sale.count';
import {SuccessSaleAmount} from './success.sale.amount';
import {FailSaleCount} from './fail.sale.count';
import {ReverseRefundSaleCount} from './reverse.refund.sale.count';

export class PfMain {
  constructor(
    public totalSummary: TotalSummary[],
    public successSaleCount: SuccessSaleCount[],
    public successSaleAmount: SuccessSaleAmount[],
    public failSaleCount: FailSaleCount[],
   public reverseSaleCount: ReverseRefundSaleCount[],
   public refundSaleCount: ReverseRefundSaleCount[]
   // public reverseRefundSaleCount: ReverseRefundSaleCount[]
  ) {
  }
}
