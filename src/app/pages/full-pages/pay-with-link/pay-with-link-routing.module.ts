import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PayWithLinkComponent} from './pay-with-link.component';


const routes: Routes = [
  {
    path: '',
    component: PayWithLinkComponent,
    data: {
      title: 'Pay Wiht Link'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayWithLinkRoutingModule { }
