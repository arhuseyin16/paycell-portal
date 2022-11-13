import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import {PfDcbRoutingModule} from './pf-dcb-routing.module';
import {PfDcbComponent} from './pf-dcb.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  imports: [
    PfDcbRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  exports: [],
  declarations: [
    PfDcbComponent
  ],
  providers: [],
})
export class PfDcbModule {
}
