import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DcbTransactionComponent} from "./dcb-transaction.component";


const routes: Routes = [
  {
    path: '',
    component: DcbTransactionComponent,
    data: {
      title: 'İşlem Tarihçesi'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class dcbTransactionRoutingModule {
}
