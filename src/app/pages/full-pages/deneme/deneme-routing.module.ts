import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DenemeComponent } from './deneme.component';


const routes: Routes = [
  {
    path: '',
    component: DenemeComponent,
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
export class DenemeRoutingModule { }
