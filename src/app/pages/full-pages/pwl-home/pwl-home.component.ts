import { ChangeDetectorRef, Component } from '@angular/core';
import { RequestMethod } from 'app/models/request/request.type.enum';
import { PwlService } from '../../../services/pwl.service';
import { MerchantGetOnboardingResource } from '../../../models/onboarding/resource/merchant.get.onboarding.resource';
import { Router } from '@angular/router';
import { MessageService } from 'app/shared/services/message.service';
import { Account } from 'app/models/account.model';

@Component({
  selector: 'app-pwl-home',
  templateUrl: './pwl-home.component.html',
  styleUrls: ['./pwl-home.component.scss']
})
export class PwlHomeComponent {

  visibility: boolean = false;

  constructor(private pwlService: PwlService,
    private router: Router,
    private messageService: MessageService,
    private cdr: ChangeDetectorRef) {
    this.merchantGet();
  }

  merchantGet() {
    this.pwlService.request(RequestMethod.GET, 'merchant-service/external/onboarding/admin', null).subscribe(
      (res) => {
        if (res != null && res.body != null) {
          const merchantGetOnboardingResource: MerchantGetOnboardingResource = res.body;
          const onboardingState = merchantGetOnboardingResource.state?.state.toLowerCase();
          if (onboardingState) {
            if (onboardingState === 'draft') {
              localStorage.setItem('onboardingDraft', JSON.stringify(merchantGetOnboardingResource));
              if (merchantGetOnboardingResource.customerType === 1) {
                this.router.navigate(['/pwl-individual-register'])
              } else if (merchantGetOnboardingResource.customerType === 2) {
                this.router.navigate(['/pwl-corporate-register'])
              }
            } else {
              this.router.navigate(['/pwl-register-status/' + onboardingState]);
            }
          }
        } else {
          this.visibility = true;
          this.cdr.markForCheck()

          /* -------- PF - DCB için ayrı onboarding gösterilmek istenirse burası aktif
          const account = JSON.parse(localStorage.getItem('account')) as Account;
          if (account?.customerType && account?.customerType.toString() === '2') {
            this.visibility = true;
            this.cdr.markForCheck()
          } else {
            this.router.navigate(['/pf-dcb/']);
          }
          */
        }
      },
      async (err) => {
        console.log("err", err);
        this.messageService.addError("error.default.message");
      });
  }
}

