import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {PfHomeRoutingModule} from "./pf-home-routing.module";
import {PfHomeComponent} from "./pf-home.component";
import {SharedModule} from "../../../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";


@NgModule({
    imports: [
        CommonModule,
        PfHomeRoutingModule,
        SharedModule,
        FormsModule,
        NgSelectModule
    ],
  exports: [],
  declarations: [
    PfHomeComponent
  ],
  providers: [],
})
export class PfHomeModule {
}
