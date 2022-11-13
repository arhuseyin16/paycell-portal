import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";

import {NgxSpinnerModule} from "ngx-spinner";
import {DcbCollectionComponent} from "./dcb-collection.component";
import {dcbColletionRoutingModule} from "./dcb-collection-routing.module";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {NgbDatepickerModule, NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";
//import {ExcelexportComponent} from "../excelexport/excelexport.component";
import {SharedModule} from "../../../shared/shared.module";


@NgModule({
    imports: [
        CommonModule,
        dcbColletionRoutingModule,
        NgxSpinnerModule,
        NgxDatatableModule,
        NgbDatepickerModule,
        FormsModule,
        NgSelectModule,
        SharedModule,
    ],
  exports: [],
    declarations: [
        DcbCollectionComponent 
    ],
  providers: [],
})
export class dcbCollectionModule {
}
