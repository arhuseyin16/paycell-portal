import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserCreateComponent} from './user-create.component';


const routes: Routes = [
  {
    path: '',
    component: UserCreateComponent,
    data: {
      title: 'Yeni Kullanıcı'
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
export class UserCreateRoutingModule {
}
