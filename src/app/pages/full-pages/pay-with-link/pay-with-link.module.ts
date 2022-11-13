import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PayWithLinkRoutingModule} from './pay-with-link-routing.module';
import {NgxSpinnerModule} from 'ngx-spinner';
import {PayWithLinkComponent} from './pay-with-link.component';
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    PayWithLinkRoutingModule,
    NgxSpinnerModule,
    SharedModule
  ],
  exports: [],
  declarations: [
    PayWithLinkComponent
  ],
  providers: []
})
export class PayWithLinkModule { }
