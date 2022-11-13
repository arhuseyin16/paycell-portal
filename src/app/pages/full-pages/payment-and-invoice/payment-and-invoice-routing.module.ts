import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PaymentAndInvoiceComponent} from './payment-and-invoice.component';


const routes: Routes = [
  {
    path: '',
    component: PaymentAndInvoiceComponent,
    data: {
      title: 'Ödeme ve Fatura'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentAndInvoiceRoutingModule {
}
