import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { I18nComponent } from './i18n.component';


const routes: Routes = [
  {
    path: '',
    component: I18nComponent,
    data: {
      title: 'Dil Desteği'
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
export class I18nRoutingModule { }
