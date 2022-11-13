import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { AccountSettingsRoutingModule } from "./account-settings-routing.module";
import { AccountSettingsComponent } from "./account-settings.component";


@NgModule({
  imports: [
    AccountSettingsRoutingModule,
    SharedModule
  ],
  exports: [],
  declarations: [
    AccountSettingsComponent
  ],
  providers: [],
})
export class AccountSettingsModule {
}
