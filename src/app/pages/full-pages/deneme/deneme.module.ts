import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { DenemeRoutingModule } from "./deneme-routing.module";
import { DenemeComponent } from "./deneme.component";
import { SharedModule } from "../../../shared/shared.module";
import { FormsModule } from "@angular/forms";


@NgModule({
  imports: [
    CommonModule,
    DenemeRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports: [],
  declarations: [
    DenemeComponent
  ],
  providers: [],
})
export class DenemeModule { }
