import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DcbCollectionComponent} from "./dcb-collection.component";


const routes: Routes = [
  {
    path: '',
    component: DcbCollectionComponent,
    data: {
      title: 'İşlem Tarihçesi'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class dcbColletionRoutingModule {
}
