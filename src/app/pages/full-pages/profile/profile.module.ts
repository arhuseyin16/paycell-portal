import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ProfileRoutingModule } from "./profile-routing.module";
import { ProfileComponent } from "./profile.component";
import { NgxSpinnerModule } from "ngx-spinner";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbAlertModule, NgbDatepickerModule } from "@ng-bootstrap/ng-bootstrap";
import { NgSelectModule } from "@ng-select/ng-select";
import { TranslateModule } from "@ngx-translate/core";


@NgModule({
    imports: [
        CommonModule,
        ProfileRoutingModule,
        NgxSpinnerModule,
        ReactiveFormsModule,
        NgbDatepickerModule,
        NgSelectModule,
        FormsModule,
        NgbAlertModule,
        TranslateModule
    ],
  exports: [],
  declarations: [
    ProfileComponent
  ],
  providers: [],
})
export class ProfileModule {
}
