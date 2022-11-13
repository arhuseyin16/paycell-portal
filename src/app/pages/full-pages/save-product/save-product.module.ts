import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { SaveProductRoutingModule } from "./save-product-routing.module";
import { SaveProductComponent } from "./save-product.component";
import { DragDirective } from './dragDrop.directive';
import { NgSelectModule } from "@ng-select/ng-select";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    SaveProductRoutingModule,
    SharedModule,
    FormsModule,
    NgbModule,
    NgSelectModule
  ],
  exports: [],
  declarations: [
    SaveProductComponent,
    DragDirective

  ],
  providers: [],
})
export class SaveProductModule {
}
