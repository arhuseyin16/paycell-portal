import {TotalSummary} from "./total.summary";
import {SuccessSaleCount} from "./success.sale.count";
import {SuccessSaleAmount} from "./success.sale.amount";
import {ReverseSaleCount} from "./reverse.sale.count";
import {ReverseSaleAmount} from "./reverse.sale.amount";


export class DcbMain {
  constructor(
    public totalSummary: TotalSummary[],
    public successSaleCount: SuccessSaleCount[],
    public successSaleAmount: SuccessSaleAmount[],
    public reverseSaleCount: ReverseSaleCount[],
    public reverseSaleAmount: ReverseSaleAmount[]
  ) {
  }
}
