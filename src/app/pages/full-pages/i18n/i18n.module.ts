import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { I18nRoutingModule } from "./i18n-routing.module";
import { I18nComponent } from "./i18n.component";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { PipeModule } from "../../../shared/pipes/pipe.module";
import { NgbdSortableHeader } from 'app/shared/directives/sortable.directie';
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
    imports: [
        CommonModule,
        I18nRoutingModule,
        NgxDatatableModule,
        PipeModule,
        NgxSpinnerModule
    ],
  exports: [],
  declarations: [
    I18nComponent,
    NgbdSortableHeader
  ],
  providers: [],
})
export class I18nModule { }
