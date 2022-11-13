import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { FormsModule } from "@angular/forms";
import { PwlCorporateRegisterRoutingModule } from "./pwl-corporate-register-routing.module";
import { PwlCorporateRegisterComponent } from "./pwl-corporate-register.component";



@NgModule({
  imports: [
    PwlCorporateRegisterRoutingModule,
    FormsModule,
    SharedModule
  ],
  exports: [],
  declarations: [
    PwlCorporateRegisterComponent
  ],
  providers: [],
})
export class PwlCorporateRegisterModule {
}
