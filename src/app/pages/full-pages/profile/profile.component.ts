import { ChangeDetectorRef, Component, OnInit, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { NgbdSortableHeader, SortEvent } from "../../../shared/directives/sortable.directie";
import { ColumnMode, DatatableComponent } from "@swimlane/ngx-datatable";
import { NgxSpinnerService } from "ngx-spinner";
import { I18nMappingService } from "../../../services/i18n-mapping.service";
import { HttpResponse } from "@angular/common/http";
import { UserService } from "../../../services/user.service";
import { User } from "../../../models/user.model";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AccountService } from "../../../shared/auth/account.service";
import { Account } from "../../../models/account.model";
import { PasswordService } from "../../../services/password.service";
import { MessageService } from "../../../shared/services/message.service";
import { MerchantService } from '../../../services/merchant.service';
import { UserMerchantResponse } from '../../../models/response/user-merchant-response';
import { BrowserService } from 'app/shared/services/browser.service';
import { POTENTIAL_CUSTOMER_TYPE } from 'app/app.constants';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss', '/assets/sass/libs/select.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {
  activeTab: string;
  generalFormSubmitted = false;
  changePasswordFormSubmitted = false;
  alertVisible = true;
  account: Account;
  spinnerText: string = '';
  success = false;
  // merchantList: MerchantRoleResponse;
  merchantList: UserMerchantResponse;
  merchant: any;
  valueHidden = true;

  changePasswordForm = new FormGroup({
    oldPassword: new FormControl('', [Validators.required]),
    newPassword: new FormControl('', [Validators.required]),
    retypeNewPassword: new FormControl('', [Validators.required])
  });

  oldPasswordInputType = "password";
  newPasswordInputType = "password";
  retypeNewPasswordInputType = "password";
  PasswordType: typeof Password;
  browserName = "";

  potentialCustomerType = POTENTIAL_CUSTOMER_TYPE;
  isAllPotentialMerchant: boolean;

  constructor(private accountService: AccountService,
    private passwordService: PasswordService,
    private spinner: NgxSpinnerService,
    private service: ChangeDetectorRef,
    private merchantService: MerchantService,
    private messageService: MessageService,
    private browserService: BrowserService) {
    const type = localStorage.getItem('type');
    this.activeTab = type ? type : 'general';
    if (localStorage.getItem('merchantLength')) {
      this.valueHidden = false;
    }
    this.PasswordType = Password;
    this.subscribeBrowserName();
  }

  ngOnInit(): void {
    this.merchantRequest();
    this.changePasswordForm.valueChanges.subscribe((asd) => this.checkFieldsEquality(asd, this.changePasswordForm), null);
    this.accountService
      .identity(false)
      .subscribe(
        (account: Account) => this.account = account,
        (err) => { }
      )
  }

  subscribeBrowserName() {
    this.browserService.browserName.subscribe(res => {
      this.browserName = res;
    });
  }

  merchantRequest() {
    this.accountService.getUserAllMerchants().subscribe(res => {
      this.merchantList = res;
      if (this.merchantList.userMerchants.length > 0) {
        const merchant = JSON.parse(localStorage.getItem('merchantName'));
        this.merchant = merchant.merchantId;
        this.checkPotentialMerchants()
        this.service.detectChanges();
      }
    });
  }

  checkPotentialMerchants() {
    this.isAllPotentialMerchant = this.merchantList.userMerchants.every(val => val.isPotential);
    let potentialMerchantIndex = this.merchantList.userMerchants.findIndex(val => val.isPotential);
    if (potentialMerchantIndex >= 0) this.merchantList.userMerchants.splice(potentialMerchantIndex, 1);
  }

  checkFieldsEquality(formControls, form: FormGroup) {

    if (formControls['newPassword'] !== formControls['retypeNewPassword']) {
      this.setControlError(form.controls['newPassword'], true);
      this.setControlError(form.controls['retypeNewPassword'], true);
    } else {
      this.setControlError(form.controls['newPassword'], null);
      this.setControlError(form.controls['retypeNewPassword'], null);
    }
  }

  setControlError(control, error) {
    if (error) {
      let errors = control.errors ? control.errors : {};
      errors['equal'] = true;
      control.setErrors(errors);
    } else if (control.errors) {
      delete control.errors['equal'];
      if (Object.keys(control.errors).length === 0) {
        control.setErrors(null);
      }
    }
  }

  setActiveTab(tab) {
    this.activeTab = tab;
  }

  get cpf() {
    return this.changePasswordForm.controls;
  }

  onChangePasswordFormSubmit() {
    this.success = false;
    this.changePasswordFormSubmitted = true;
    if (this.changePasswordForm.invalid) {
      return;
    }

    this.passwordService
      .update(this.changePasswordForm.value.oldPassword, this.changePasswordForm.value.newPassword)
      .subscribe(
        (res) => {
          this.resetSpinner();
          this.success = true;
        },
        (err) => {
          this.messageService.addHttpError({
            httpErrorResponse: err,
            defaultMessage: 'reset-password.message.error'
          });
          this.resetSpinner();
        }
      );
  }

  showSpinner(text: string): void {
    this.spinnerText = text;
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
  }

  resetSpinner(): void {
    this.spinnerText = null;
    this.spinner.hide();
  }

  changeMerchant(e) {
    if (e) {
      const merchant = this.merchantList.userMerchants.find(m => m.merchantId === e);
      localStorage.setItem('merchantName', JSON.stringify(merchant));
      this.accountService.identity(true).subscribe((account: Account) => {
        this.account = account;
        localStorage.setItem('account', JSON.stringify(account));
      });
      // this.accountService.identity(true).subscribe((account: Account) => this.account = account);

    }
  }

  changePasswordInputType(type: Password) {
    switch (type) {
      case Password.oldPassword:
        this.oldPasswordInputType === "password" ? this.oldPasswordInputType = "text" : this.oldPasswordInputType = "password";
        break;
      case Password.newPassword:
        this.newPasswordInputType === "password" ? this.newPasswordInputType = "text" : this.newPasswordInputType = "password";
        break;
      case Password.retypeNewPassword:
        this.retypeNewPasswordInputType === "password" ? this.retypeNewPasswordInputType = "text" : this.retypeNewPasswordInputType = "password";
        break;
      default:
        break;
    }
  }

}

enum Password {
  oldPassword,
  newPassword,
  retypeNewPassword
}
