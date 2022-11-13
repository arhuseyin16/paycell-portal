/**
 * @author Emre Dinc
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PwlRegisterStatusComponent } from './pwl-register-status.component';


const routes: Routes = [
  {
    path: '',
    component: PwlRegisterStatusComponent,
    data: {
      title: 'Kayıt Durumu'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PwlRegisterStatusRoutingModule {
}
