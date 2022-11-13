import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';

import { ContentPagesRoutingModule } from "./content-pages-routing.module";

import { ErrorPageComponent } from "./error/error-page.component";
import { LoginPageComponent } from "./login/login-page.component";
import { OtpPageComponent } from "./otp/otp-page.component";
import { TranslateModule } from "@ngx-translate/core";
import { SharedModule } from "../../shared/shared.module";
import { ResetPasswordPageComponent } from "./reset-password/reset-password-page.component";
import { ChangePasswordPageComponent } from "./change-password/change-password-page.component";
import { TerminusPageComponent } from "./terminus/terminus-page.component";
import { OrcaInlineUserComponent } from './orca-inline-user/orca-inline-user.component';
import { MailConfirmationComponent } from './mail-confirmation/mail-confirmation.component';
import { MerchantComponent } from './merchant/merchant.component';


@NgModule({
    imports: [
        CommonModule,
        ContentPagesRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        NgxSpinnerModule,
        TranslateModule,
        SharedModule
    ],
  exports: [
  ],
  declarations: [
    ErrorPageComponent,
    LoginPageComponent,
    OtpPageComponent,
    ResetPasswordPageComponent,
    ChangePasswordPageComponent,
    TerminusPageComponent,
    OrcaInlineUserComponent,
    MailConfirmationComponent,
    MerchantComponent
  ]
})
export class ContentPagesModule { }
