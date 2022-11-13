import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { FormsModule } from "@angular/forms";
import { PwlIndividualRegisterRoutingModule } from "./pwl-individual-register-routing.module";
import { PwlIndividualRegisterComponent } from "./pwl-individual-register.component";



@NgModule({
  imports: [
    PwlIndividualRegisterRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports: [],
  declarations: [
    PwlIndividualRegisterComponent
  ],
  providers: [],
})
export class PwlIndividualRegisterModule {
}
