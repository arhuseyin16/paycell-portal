import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { ShopManagementRoutingModule } from "./shop-management-routing.module";
import { ShopManagementComponent } from "./shop-management.component";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        ShopManagementRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule
    ],
  exports: [],
  declarations: [
    ShopManagementComponent
  ],
  providers: [],
})
export class ShopManagementModule {
}
