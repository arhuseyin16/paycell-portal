import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountSummaryComponent} from './account-summary.component';


const routes: Routes = [
  {
    path: '',
    component: AccountSummaryComponent,
    data: {
      title: 'Hesap Özeti'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountSummaryRoutingModule {
}
