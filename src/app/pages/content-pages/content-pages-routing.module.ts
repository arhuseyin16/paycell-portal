import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from "./error/error-page.component";
import { LoginPageComponent } from "./login/login-page.component";
import { OtpPageComponent } from "./otp/otp-page.component";
import { ResetPasswordPageComponent } from "./reset-password/reset-password-page.component";
import { ChangePasswordPageComponent } from "./change-password/change-password-page.component";
import { TerminusPageComponent } from "./terminus/terminus-page.component";
import {OrcaInlineUserComponent} from "./orca-inline-user/orca-inline-user.component";
import {MailConfirmationComponent} from './mail-confirmation/mail-confirmation.component';
import {MerchantComponent} from './merchant/merchant.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'error',
        component: ErrorPageComponent,
        data: {
          title: 'Error Page'
        }
      },
      {
        path: 'login',
        component: LoginPageComponent,
        data: {
          title: 'Login Page'
        }
      },
      {
        path: 'otp',
        component: OtpPageComponent,
        data: {
          title: 'Otp Page'
        }
      },
      {
        path: 'merchant',
        component: MerchantComponent,
        data: {
          title: 'Merchant Page'
        }
      },
      {
        path: 'reset-password',
        component: ResetPasswordPageComponent,
        data: {
          title: 'Reset Password Page'
        }
      },
      {
        path: 'reset-change-password',
        component: ChangePasswordPageComponent,
        data: {
          title: 'Reset Password Page',
          type: 'reset'
        }
      },
      {
        path: 'change-expired-password',
        component: ChangePasswordPageComponent,
        data: {
          title: 'Change Expired Password Page',
          type: 'expired'
        }
      },
      {
        path: 'terminus',
        component: TerminusPageComponent,
        data: {
          title: 'Terminus Page',
        }
      },
      {
        path: 'orca-inline-user',
        component: OrcaInlineUserComponent,
        data: {
          title: 'Orca Inline User Page',
        }
      },
      {
        path: 'email-activation',
        component: MailConfirmationComponent,
        data: {
          title: 'User Mail Confirmation'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentPagesRoutingModule {
}
