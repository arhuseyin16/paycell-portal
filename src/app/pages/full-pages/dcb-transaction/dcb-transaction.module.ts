import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";

import {NgxSpinnerModule} from "ngx-spinner";
import {DcbTransactionComponent} from "./dcb-transaction.component";
import {dcbTransactionRoutingModule} from "./dcb-transaction-routing.module";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {NgbDatepickerModule, NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";
//import {ExcelexportComponent} from "../excelexport/excelexport.component";
import {SharedModule} from "../../../shared/shared.module";
import {DecimalAmountDirective} from '../../../shared/directives/decimal-amount.directive';


@NgModule({
    imports: [
        CommonModule,
        dcbTransactionRoutingModule,
        NgxSpinnerModule,
        NgxDatatableModule,
        NgbDatepickerModule,
        FormsModule,
        NgSelectModule,
        SharedModule,
    ],
  exports: [],
  declarations: [
    DcbTransactionComponent,
    DecimalAmountDirective
  ],
  providers: [],
})
export class dcbTransactionModule {
}
