import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShopManagementComponent} from './shop-management.component';


const routes: Routes = [
  {
    path: '',
    component: ShopManagementComponent,
    data: {
      title: 'Dükkan Yönetimi'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopManagementRoutingModule {
}
