import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PfHistoryComponent} from "./pf-history.component";


const routes: Routes = [
  {
    path: '',
    component: PfHistoryComponent,
    data: {
      title: 'İşlem Tarihçesi'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class pfHistoryRoutingModule {
}
