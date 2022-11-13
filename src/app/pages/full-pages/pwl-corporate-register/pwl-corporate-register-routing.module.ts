import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PwlCorporateRegisterComponent } from './pwl-corporate-register.component';


const routes: Routes = [
  {
    path: '',
    component: PwlCorporateRegisterComponent,
    data: {
      title: 'Firma Yetkili Bilgileri'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PwlCorporateRegisterRoutingModule {
}
