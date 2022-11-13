import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NgxSpinnerModule} from "ngx-spinner";
import {OrcaInlineUserComponent} from "./orca-inline-user.component";
import {UserRoutingModule} from "../../full-pages/user/user-routing.module";


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    NgxSpinnerModule
  ],
  exports: [],
  declarations: [
    OrcaInlineUserComponent
  ],
  providers: [],
})

export class OrcaInlineUserModule {}
