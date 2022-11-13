import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {UserCreateRoutingModule} from "./user-create-routing.module";
import { UserCreateComponent } from "./user-create.component";
import { SharedModule } from "../../../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  imports: [
    CommonModule,
    UserCreateRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  exports: [],
  declarations: [
    UserCreateComponent
  ],
  providers: [],
})
export class UserCreateModule {
}
