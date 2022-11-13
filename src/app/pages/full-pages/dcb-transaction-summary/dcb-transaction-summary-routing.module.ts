import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {DcbTransactionSummaryComponent} from "./dcb-transaction-summary.component";

const routes: Routes = [
  {
    path: '',
    component: DcbTransactionSummaryComponent,
    data: {
      title: 'Tahsilat Özet Raporu'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class dcbTransactionSummaryRoutingModule {
}
