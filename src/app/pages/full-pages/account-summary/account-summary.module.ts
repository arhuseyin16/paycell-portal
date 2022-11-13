import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { AccountSummaryRoutingModule } from "./account-summary-routing.module";
import { AccountSummaryComponent } from "./account-summary.component";


@NgModule({
  imports: [
    AccountSummaryRoutingModule,
    SharedModule
  ],
  exports: [],
  declarations: [
    AccountSummaryComponent
  ],
  providers: [],
})
export class AccountSummaryModule {
}
