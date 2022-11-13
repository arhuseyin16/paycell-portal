import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MerchantService} from '../../../services/merchant.service';
import {MessageService} from '../../../shared/services/message.service';
import {TranslateService} from '@ngx-translate/core';
import {AccountService} from '../../../shared/auth/account.service';
import {UserMerchantResponseView} from '../../../models/response/user-merchant-response';
import {ReturnLocalizedMessage} from '../../../util/return-localizedMessage';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.scss']
})
export class MerchantComponent implements OnInit {
  merchant: any
  merchantList: Array<UserMerchantResponseView> = new Array<UserMerchantResponseView>();
  showMerchant = false;
  responseSuccess = false;
  responseError = false;
  errorMessage: string;

  constructor(private router: Router,
              private messageService: MessageService,
              private translate: TranslateService,
              private accountService: AccountService,
              private service: ChangeDetectorRef,
              private merchantService: MerchantService) {
    this.merchantRequest();
  }

  ngOnInit(): void {

  }

  merchantRequest() {
      localStorage.removeItem('merchantLength');
      this.accountService.getUserAllMerchants().subscribe((res) => {
        if (res.userMerchants.length === 1) {
            localStorage.setItem('merchantLength', '1');
            this.merchant = res.userMerchants[0].merchantId;
            this.merchantList = res.userMerchants;
            this.submitClick();
        } else if (res.userMerchants.length > 1) {
          res.userMerchants.forEach(row => {
            if (row.isPotential === false) {
              this.merchantList.push(row);
            }
          });
        }
        if (this.merchantList.length === 1) {
          localStorage.setItem('merchantLength', '1');
          this.merchant = this.merchantList[0].merchantId;
          this.submitClick();
        }
        this.responseError = false;
        this.responseSuccess = true;
        this.showMerchant = true;
        this.service.detectChanges();
      }, (err) => {
        this.errorMessage = ReturnLocalizedMessage(err);
        this.responseSuccess = false;
        this.responseError = true;
        this.showMerchant = true;
        this.service.detectChanges();
      });
  }

  submitClick() {
    if (this.merchant) {
      const merchant = this.merchantList.find(m => m.merchantId === this.merchant);
      localStorage.setItem('merchantName', JSON.stringify(merchant));
      this.router.navigate(['/pages/terminus']);
    } else {
      this.messageService.addError(this.translate.instant('merchant.merchant.required'));
    }
  }
}
