import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PwlIndividualRegisterComponent } from './pwl-individual-register.component';


const routes: Routes = [
  {
    path: '',
    component: PwlIndividualRegisterComponent,
    data: {
      title: 'Kişisel Bilgiler'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PwlIndividualRegisterRoutingModule {
}
