import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { PaymentAndInvoiceRoutingModule } from "./payment-and-invoice-routing.module";
import { PaymentAndInvoiceComponent } from "./payment-and-invoice.component";


@NgModule({
  imports: [
    PaymentAndInvoiceRoutingModule,
    SharedModule
  ],
  exports: [],
  declarations: [
    PaymentAndInvoiceComponent
  ],
  providers: [],
})
export class PaymentAndInvoiceModule {
}
