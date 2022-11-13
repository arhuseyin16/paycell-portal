import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NgxSpinnerModule} from "ngx-spinner";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {NgbDatepickerModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";
import {SharedModule} from "../../../shared/shared.module";
import {DcbCollectionSummaryComponent} from "./dcb-collection-summary.component";
import {dcbCollectionSummaryRoutingModule} from "./dcb-collection-summary-routing.module";

@NgModule({
  imports: [
    CommonModule,
    dcbCollectionSummaryRoutingModule,
    NgxSpinnerModule,
    NgxDatatableModule,
    NgbDatepickerModule,
    FormsModule,
    NgSelectModule,
    SharedModule,
  ],
  exports: [],
  declarations: [
    DcbCollectionSummaryComponent
  ],
  providers: [],
})
export class dcbCollectionSummaryModule {
}
