/**
 * @author Emre Dinc
 */
import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { PwlRegisterStatusRoutingModule } from './pwl-register-status-routing.module';
import { PwlRegisterStatusComponent } from './pwl-register-status.component';



@NgModule({
  imports: [
    PwlRegisterStatusRoutingModule,
    SharedModule

  ],
  exports: [],
  declarations: [
    PwlRegisterStatusComponent
  ],
  providers: [],
})
export class PwlRegisterStatusModule {
}
