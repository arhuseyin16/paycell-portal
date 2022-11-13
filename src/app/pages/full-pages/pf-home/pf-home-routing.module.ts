import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PfHomeComponent } from './pf-home.component';


const routes: Routes = [
  {
    path: '',
    component: PfHomeComponent,
    data: {
      title: 'Ana Sayfa'
    }
    // children: [
    //   {
    //     path: 'page',
    //     component: PageComponent,
    //     data: {
    //       title: 'Page'
    //     }
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PfHomeRoutingModule { }
