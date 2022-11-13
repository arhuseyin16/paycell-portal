import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";

import {NgxSpinnerModule} from "ngx-spinner";
import {PfHistoryComponent} from "./pf-history.component";
import {pfHistoryRoutingModule} from "./pf-history-routing.module";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {NgbDatepickerModule, NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";
import {ExcelexportComponent} from "../excelexport/excelexport.component";
import {SharedModule} from "../../../shared/shared.module";


@NgModule({
    imports: [
        CommonModule,
        pfHistoryRoutingModule,
        NgxSpinnerModule,
        NgxDatatableModule,
        NgbDatepickerModule,
        FormsModule,
        NgSelectModule,
        SharedModule,
    ],
  exports: [],
    declarations: [
        PfHistoryComponent,
        ExcelexportComponent
    ],
  providers: [],
})
export class pfHistoryModule {
}
