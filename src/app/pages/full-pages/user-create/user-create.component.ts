import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserService } from "../../../services/user.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserMerchant } from "../../../models/request/user.merchant";
import { AccountService } from "../../../shared/auth/account.service";
import { Account } from "app/models/account.model";
import { Permission } from "../../../models/request/permission.model";
import { Role } from "../../../models/request/role.model";
import { Authority } from "../../../models/request/authority.model";
import { NgxSpinnerService } from "ngx-spinner";
import { UserCreate } from "../../../models/request/user.create";
import { MessageService } from "../../../shared/services/message.service";
import { MerchantService } from "../../../services/merchant.service";
import { Merchant } from "../../../models/merchant";
import { RelatedMerchant } from "../../../models/request/related.merchant";

export interface MerchantSelection {
  master: Merchant,
  l1: Merchant,
  l2: Merchant
}

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCreateComponent implements OnInit {

  step1Form = new FormGroup({
    firstname: new FormControl(null, [Validators.required]),
    lastname: new FormControl(null, [Validators.required]),
    identityNo: new FormControl(null, [Validators.required]),
    dateOfBirth: new FormControl(null, []),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(new RegExp('^[0-9]{10}$'))])
  });

  permissions = new Permission(null, null);

  spinnerText: string = '';
  selectedRoles: Role[] = [];
  selectedAuthorities: Authority[] = [];
  selectedMerchants: MerchantSelection[] = [];

  masterMerchants: Merchant[] = [];
  selectedMasterMerchant: Merchant;
  l1Merchants: Merchant[] = [];
  selectedL1Merchant: Merchant;
  l2Merchants: Merchant[] = [];
  selectedL2Merchant: Merchant;


  constructor(private userService: UserService,
              private ref: ChangeDetectorRef,
              private router: Router,
              private accountService: AccountService,
              private spinner: NgxSpinnerService,
              private messageService: MessageService,
              private merchantService: MerchantService) {
  }

  ngOnInit(): void {
    this.getMasterMerchants();
    this.getAllPermissions();
  }

  getMasterMerchants() {
    this.merchantService
      .masterMerchantList()
      .subscribe(
        (res) => {
          this.masterMerchants = res.body;
          this.ref.detectChanges();
        },
        (err) => {
          this.messageService.addHttpError({
            httpErrorResponse: err,
            defaultMessage: null
          });
        }
      );
  }

  getChildMerchants(merchantId, level) {
    this.merchantService
      .childMerchantList(merchantId)
      .subscribe(
        (res) => {
          this[level + 'Merchants'] = res.body;
          this.ref.detectChanges();
        },
        (err) => {
          this.messageService.addHttpError({
            httpErrorResponse: err,
            defaultMessage: null
          });
        }
      );
  }

  onSelectedMasterMerchantChange() {
    this.getChildMerchants(this.selectedMasterMerchant.merchantId, 'l1');
  }

  onL1MerchantChange() {
    this.getChildMerchants(this.selectedL1Merchant.merchantId, 'l2');
  }

  addMerchant() {
    if (this.selectedMasterMerchant && this.selectedL1Merchant) {
      if (this.selectedMerchants?.length > 0 && this.selectedMerchants
        .some(value => value.master.merchantId !== this.selectedMasterMerchant.merchantId)) {
        this.messageService.addError('Farklı firmalardan seçim yapamazsınız!');
      } else {
        if (!this.selectedMerchants
          .some(value => this.selectedL2Merchant ? value.l2?.merchantId === this.selectedL2Merchant.merchantId : !value.l2 && value.l1.merchantId === this.selectedL1Merchant.merchantId)) {
          this.selectedMerchants.push({
            master: Object.assign({}, this.selectedMasterMerchant),
            l1: this.selectedL1Merchant ? Object.assign({}, this.selectedL1Merchant) : null,
            l2: this.selectedL2Merchant ? Object.assign({}, this.selectedL2Merchant) : null
          });

          this.selectedL1Merchant = null;
          this.l2Merchants = [];
          this.selectedL2Merchant = null;
        }
      }
    }
  }

  removeMerchant(m: MerchantSelection) {
    const i = this.selectedMerchants.indexOf(m);
    if (i > -1) {
      this.selectedMerchants.splice(i, 1);
    }
  }

  createUser() {
    this.showSpinner('Kullanıcı Yaratılıyor...');

    const relatedMerchant = new RelatedMerchant(this.selectedMerchants
        .map(value => value.l2 ? value.l2.merchantId : (value.l1 ? value.l1.merchantId : null))
        .filter(value => value !== null),
      this.selectedMasterMerchant.merchantId);

    const userCreate = new UserCreate(
      this.step1Form.controls.firstname.value,
      this.step1Form.controls.lastname.value,
      this.step1Form.controls.email.value,
      this.step1Form.controls.phone.value,
      this.step1Form.controls.identityNo.value,
      this.getDateOfBirth(this.step1Form.controls.dateOfBirth.value),
      relatedMerchant,
      this.selectedAuthorities.map(auth => auth.name),
      this.selectedRoles.map(role => role.name));

    this.userService
      .createUser(userCreate)
      .subscribe(
        () => this.router.navigate(['/user']),
        (err) => {
          this.messageService.addHttpError({
            httpErrorResponse: err,
            defaultMessage: null
          });
          this.resetSpinner()
        });
  }

  getAllPermissions() {
    this.userService
      .allPermissions()
      .subscribe(
        (res) => {
          this.permissions = res.body;
        },
        (err) => {
        }
      );
  }

  getDateOfBirth(dateObj) {
    if (dateObj && dateObj.year && dateObj.month && dateObj.day) {
      return dateObj.day + '/' + dateObj.month + '/' + dateObj.year;
    }
    return null;
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
}

