import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'app/shared/shared.module';
import { PwlHomeRoutingModule } from "./pwl-home-routing.module";
import { PwlHomeComponent } from "./pwl-home.component";



@NgModule({
  imports: [
    PwlHomeRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports: [],
  declarations: [
    PwlHomeComponent
  ],
  providers: [],
})
export class PwlHomeModule {
}
