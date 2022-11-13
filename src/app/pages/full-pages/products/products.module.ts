import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { ProductsRoutingModule } from "./products-routing.module";
import { ProductsComponent } from "./products.component";


@NgModule({
  imports: [
    ProductsRoutingModule,
    SharedModule
  ],
  exports: [],
  declarations: [
    ProductsComponent

  ],
  providers: [],
})
export class ProductsModule {
}
