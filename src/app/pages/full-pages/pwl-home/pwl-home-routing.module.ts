import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PwlHomeComponent } from './pwl-home.component';


const routes: Routes = [
  {
    path: '',
    component: PwlHomeComponent,
    data: {
      title: 'Hesap Özeti'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PwlHomeRoutingModule {
}
