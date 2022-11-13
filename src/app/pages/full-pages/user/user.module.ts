import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { UserRoutingModule } from "./user-routing.module";
import { UserComponent } from "./user.component";
import { NgxSpinnerModule } from "ngx-spinner";
import {SharedModule} from '../../../shared/shared.module';


@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
        NgxSpinnerModule,
        SharedModule
    ],
  exports: [],
  declarations: [
    UserComponent
  ],
  providers: [],
})
export class UserModule { }
