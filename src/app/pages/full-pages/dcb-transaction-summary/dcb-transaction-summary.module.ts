import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NgxSpinnerModule} from "ngx-spinner";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {NgbDatepickerModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";
import {SharedModule} from "../../../shared/shared.module";
import {DcbTransactionSummaryComponent} from "./dcb-transaction-summary.component";
import {dcbTransactionSummaryRoutingModule} from "./dcb-transaction-summary-routing.module";

@NgModule({
  imports: [
    CommonModule,
    dcbTransactionSummaryRoutingModule,
    NgxSpinnerModule,
    NgxDatatableModule,
    NgbDatepickerModule,
    FormsModule,
    NgSelectModule,
    SharedModule,
  ],
  exports: [],
  declarations: [
    DcbTransactionSummaryComponent
  ],
  providers: [],
})
export class dcbTransactionSummaryModule {
}
