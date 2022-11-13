import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";
import {DcbHomeRoutingModule} from "./dcb-home-routing.module";
import {DcbHomeComponent} from "./dcb-home.component";

@NgModule({
  imports: [
    CommonModule,
    DcbHomeRoutingModule,
    SharedModule,
    FormsModule,
    NgSelectModule
  ],
  exports: [],
  declarations: [
    DcbHomeComponent
  ],
  providers: [],
})
export class DcbHomeModule {
}
