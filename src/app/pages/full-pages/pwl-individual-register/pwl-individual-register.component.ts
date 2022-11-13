import { Component, OnInit } from '@angular/core';
import { VerifyMernisRequest } from 'app/models/request/verify.mernis.request';
import { PwlService } from 'app/services/pwl.service';
import { UserService } from '../../../services/user.service';
import { ParentSectorInfoResponse } from '../../../models/response/parent-sector-info-response';
import { CheckIbanRequest } from 'app/models/request/check.iban.request';
import { MessageService } from 'app/shared/services/message.service';
import { GetActiveContractTemplateRequest } from 'app/models/request/get.active.contract.template.request';
import { GetActiveContractTemplateResponse } from 'app/models/response/get.active.contract.template.response';
import { TranslateService } from '@ngx-translate/core';
import { City } from 'app/models/response/user-pf-get-all-list/city';
import { Town } from 'app/models/response/user-pf-get-all-list/town';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MerchantCreateOnboardingDto } from 'app/models/onboarding/dto/merchant.onboarding.dto';
import { IndividualCustomer } from 'app/models/onboarding/individual.customer';
import { Address } from 'app/models/onboarding/address';
import { Shop } from 'app/models/onboarding/shop';
import { CommissionDto } from 'app/models/onboarding/commisions';
import { Status } from 'app/models/onboarding/status';
import { RequestMethod } from 'app/models/request/request.type.enum';
import { Router } from '@angular/router';
import { LoaderService } from '../../../shared/my-loader/loader.service';
import { ChangeDetectorRef } from '@angular/core';
import { logger } from 'codelyzer/util/logger';

@Component({
  selector: 'app-pwl-individual-register',
  templateUrl: './pwl-individual-register.component.html',
  styleUrls: ['./pwl-individual-register.component.scss']
})
export class PwlIndividualRegisterComponent {
  showStep1: boolean;
  showStep2: boolean;
  showStep3: boolean;
  showStep4: boolean;
  maxTab = 4;
  name: string;
  surname: string;
  citizenshipNumber: string;
  birthdate: string;
  iban: string;
  city: City;
  town: Town;
  address: string;
  shopName: string;
  serviceIndustry: ParentSectorInfoResponse;
  productsInfo: string;
  channelLink: string;
  facebook: string;
  youtube: string;
  instagram: string;
  twitter: string;
  contract1approved: Boolean = false;
  contract2approved: Boolean = false;
  contract3approved: Boolean = false;
  parentSectorInfos: ParentSectorInfoResponse[];

  contract1: GetActiveContractTemplateResponse;
  contract2: GetActiveContractTemplateResponse;
  contract3: GetActiveContractTemplateResponse;
  closeResult: string;
  openedContractTitle: string;
  openedContractContent: string;
  openedContractNumber: number;

  cityList: City[];
  townList: Town[];
  townMap: Map<string, Town[]>
  lang: string;

  public hasFacebookLink = false;
  public hasYoutubeLink = false;
  public hasInstagramLink = false;
  public hasTwitterLink = false;


  constructor(
    private userService: UserService,
    private pwlService: PwlService,
    private messageService: MessageService,
    private translateService: TranslateService,
    private loaderService: LoaderService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private modalService: NgbModal) {
    this.showStep1 = true;
    this.showStep2 = false;
    this.showStep3 = false;
    this.showStep4 = false;
    this.lang = this.translateService.currentLang.toLowerCase();
    this.getParentSectorInfos();
    this.getAllList();
  }

  onlyNumbersAllowed(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;

    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  ibanMask(event) {
    let iban = event.target.value.replaceAll(' ', '').replace(/\D/g, '');
    let maskedIban;
    if (iban < 2) {
      maskedIban = iban;
    } else {
      if (iban > 24) {
        iban = iban.slice(0, 24)
      }
      let firstTwoNumbers = iban.slice(0, 2);
      let otherNumbers = iban.slice(2, iban.length).replace(/(.{4})/g, '$1 ')
      maskedIban = firstTwoNumbers + ' ' + otherNumbers;
    }
    event.target.value = maskedIban.trim();
    this.iban = event.target.value;
  }

  getParentSectorInfos() {
    this.pwlService.getParentSectorInfos().subscribe(
      (res) => {
        if (res != null && res.body != null) {
          this.parentSectorInfos = res.body;
        }
      },
      async (err) => {
      });
  }

  getAllList() {
    this.pwlService.getAllList().toPromise().then(
      (res) => {
        if (res != null && res.body != null) {
          this.cityList = res.body.cityList;
          this.townMap = res.body.townMap;
        }
      },
      async (err) => {
      });
  }

  // TODO bu merchantGet() pwl-home-component.ts dosyasina tasinacak.
  // merchantGet() {
  //   this.pwlService.request(RequestMethod.GET, 'merchant-service/external/onboarding/merchant/info/{id}', null).subscribe(
  //
  //     (res) => {
  //       if (res != null && res.body != null) {
  //        // res.state  draft
  //         this.fillTextAreas(res.body);
  //        // res.state rejected
  //        // rout
  //       }
  //     },
  //     async (err) => {
  //     });
  // }
  // TODO fillTextAreas ileride kullanilmak uzere burada yoruma kapatildi.
  // fillTextAreas(merchantGetOnboardingResource : MerchantGetOnboardingResource) {
  //   this.name = merchantGetOnboardingResource.individualCustomer.name;
  //   this.surname = merchantGetOnboardingResource.individualCustomer.surname;
  //   this.citizenshipNumber = merchantGetOnboardingResource.individualCustomer.tckn;
  //   this.birthdate = merchantGetOnboardingResource.individualCustomer.birthDate;
  //   this.iban = merchantGetOnboardingResource.individualCustomer.iban;
  //   this.shopName = merchantGetOnboardingResource.shop.name;
  //   if (merchantGetOnboardingResource.shop.linkFB != null && merchantGetOnboardingResource.shop.linkFB != '') {
  //     this.hasFacebookLink = true;
  //     this.facebook = merchantGetOnboardingResource.shop.linkFB;
  //   }
  //   if (merchantGetOnboardingResource.shop.linkYT != null && merchantGetOnboardingResource.shop.linkYT != '') {
  //     this.hasYoutubeLink = true;
  //     this.youtube = merchantGetOnboardingResource.shop.linkYT;
  //   }
  //   if (merchantGetOnboardingResource.shop.linkTW != null && merchantGetOnboardingResource.shop.linkTW != '') {
  //     this.hasTwitterLink = true;
  //     this.twitter = merchantGetOnboardingResource.shop.linkTW;
  //   }
  //   if (merchantGetOnboardingResource.shop.linkIG != null && merchantGetOnboardingResource.shop.linkIG != '') {
  //     this.hasInstagramLink = true;
  //     this.instagram = merchantGetOnboardingResource.shop.linkIG;
  //   }
  //   this.channelLink = merchantGetOnboardingResource.shop.linkWWW;
  //   this.address = merchantGetOnboardingResource.address.openAddress;
  // }
  citySelect() {
    this.townList = this.townMap[this.city.id];
  }

  openContactModelOpen(contractModel, contract: GetActiveContractTemplateResponse, contractNumber: number) {
    this.openedContractTitle = contract.title;
    this.openedContractContent = contract.content;
    this.openedContractNumber = contractNumber;
    this.modalService.open(contractModel, { size: <any>'xl', scrollable: true })
  }

  contractApprove() {
    if (this.openedContractNumber == 1) {
      this.contract1approved = true;
    }
    if (this.openedContractNumber == 2) {
      this.contract2approved = true;
    }
    if (this.openedContractNumber == 3) {
      this.contract3approved = true;
    }
  }

  changeSocialMediaSliderStatus(sliderName: string) {
    if (sliderName === 'facebook' && !this.hasFacebookLink) {
      this.facebook = '';
    }
    if (sliderName === 'youtube' && !this.hasYoutubeLink) {
      this.youtube = '';
    }
    if (sliderName === 'instagram' && !this.hasInstagramLink) {
      this.instagram = '';
    }
    if (sliderName === 'twitter' && !this.hasTwitterLink) {
      this.twitter = '';
    }
  }
  verifyMernis() {
    return this.userService.verifyMernis(new VerifyMernisRequest(this.name, this.surname, this.citizenshipNumber, this.birthdate))
      .then(
        (res) => {
          return true;
        },
        (err) => {
          console.log(err)
          return false;
        })
  }
  
  nextStep(stepNo: number) {

    if (stepNo === 2) {
      const verifyMernisPromise = this.verifyMernis();
      //const checkIbanPromise = this.checkIban();

      const promiseExecution = async () => {
        const promiseResult = await Promise.all([
          verifyMernisPromise,
          // checkIbanPromise
        ])
        if (promiseResult[0] === true) {
          this.showStep1 = false;
          this.showStep2 = true;
          this.cdr.detectChanges();
        } else {
          if(promiseResult[0] === false)
           this.messageService.addError('pwl-individual-register.error.messages.verify.mernis');
        }
      };
      promiseExecution();
    }
    if (stepNo === 3) {
      this.showStep2 = false;
      this.showStep3 = true;
    }
    if (stepNo === 4) {
      const contract1Promise = this.getContract1();
      const contract2Promise = this.getContract2();
      const contract3Promise = this.getContract3();

      const promiseExecution = async () => {
        const promiseResult = await Promise.all([contract1Promise, contract2Promise, contract3Promise])
        if (promiseResult[0] === true && promiseResult[1] === true && promiseResult[2] === true) {
          this.showStep3 = false;
          this.showStep4 = true;
          this.cdr.detectChanges();
        } else {
          this.messageService.addError('pwl-corporate-register.error.messages.get.active.contract.template');
        }
      };
      promiseExecution();
    }
  }

  backStep(stepNo: number) {
    if (stepNo == 1) {
      this.showStep1 = true;
      this.showStep2 = false;
    }
    if (stepNo == 2) {
      this.showStep2 = true;
      this.showStep3 = false;
    }
    if (stepNo == 3) {
      this.showStep3 = true;
      this.showStep4 = false;

    }
  }

  complete() {
    if (this.contract1approved, this.contract2approved, this.contract3approved) {
      const account = JSON.parse(localStorage.getItem('account'));
      const individualCustomer = new IndividualCustomer(this.name, this.surname, this.citizenshipNumber, this.birthdate, this.iban != null ? 'TR' + this.iban.replace(/ /g, '') : '', account?.email, account?.msisdn, 44288, 200160);
      const address = new Address(this.city?.id, this.city?.name, this.town?.id, this.town?.name, this.address, '34000');
      // tslint:disable-next-line:max-line-length
      const shop = new Shop(this.shopName, this.serviceIndustry?.description, String(this.serviceIndustry?.code), this.channelLink, this.instagram, this.facebook, this.youtube, this.twitter);
      const state = new Status('SUBMITTED', '', '', '');
      const commisions = new CommissionDto(1.90, 1.80, 7, 2.9, 3.65, 4.55, 5.35, 6.08, 7.07, 7.85, 8.62, 9.38, 10.15, 10.92, 10.92, 10.92);
      const merchantCreateOnboardingDto = new MerchantCreateOnboardingDto(state, null, null, "INDIVIDUAL", false, individualCustomer, null, address, shop, null, commisions);
      this.pwlService.request(RequestMethod.POST, "merchant-service/external/onboarding/admin", merchantCreateOnboardingDto).subscribe();
      this.router.navigate(['/pwl-register-status/submitted']);
    }
    else {
      this.messageService.addError('Lütfen sözleşmeleri onaylayınız')
    }
  }

  checkIban() {
    return this.pwlService.checkIban(new CheckIbanRequest(this.iban, this.citizenshipNumber)).subscribe(
      (res) => {
        if (res != null && res.body != null) {
          // this.checkGib()
          return true;
        }
      },
      (err) => {
        this.messageService.addError('pwl-individual-register.error.messages.check.iban');
        return false;
      });
  }

  getContract1() {
    return this.pwlService.getActiveContractTemplate(new GetActiveContractTemplateRequest(160, this.lang)).then(
      (res) => {
        if (res != null && res.body != null) {
          this.contract1 = res.body;
          return true;
        }
        return false;
      },
      (err) => {
        console.log("err", err);        
        return false;
      });
  }

  getContract2() {
    return this.pwlService.getActiveContractTemplate(new GetActiveContractTemplateRequest(161, this.lang)).then(
      (res) => {
        if (res != null && res.body != null) {
          this.contract2 = res.body;
          return true;
        }
        return false;
      },
      (err) => {
        console.log("err", err);
        return false;
      });
  }

  getContract3() {
    return this.pwlService.getActiveContractTemplate(new GetActiveContractTemplateRequest(162, this.lang)).then(
      (res) => {
        if (res != null && res.body != null) {
          this.contract3 = res.body;
          return true;
        }
        return false;
      },
      (err) => {
        console.log("err", err);
        return false;
      });
  }


}

