import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PfDcbComponent} from './pf-dcb.component';


const routes: Routes = [
  {
    path: '',
    component: PfDcbComponent,
    data: {
      title: 'Pf Dcb'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PfDcbRoutingModule {
}
