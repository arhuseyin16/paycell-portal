import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent} from './orders.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  imports: [
    OrdersRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports: [],
  declarations: [
    OrdersComponent
  ],
  providers: [],
})
export class OrdersModule {
}
