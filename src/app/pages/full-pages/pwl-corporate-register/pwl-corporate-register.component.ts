import { ChangeDetectorRef, Component } from '@angular/core';
import { PwlService } from 'app/services/pwl.service';
import { UserService } from '../../../services/user.service';
import { VerifyMernisRequest } from 'app/models/request/verify.mernis.request';
import { ParentSectorInfoResponse } from '../../../models/response/parent-sector-info-response';
import { MessageService } from 'app/shared/services/message.service';
import { CheckIbanRequest } from 'app/models/request/check.iban.request';
import { City } from '../../../models/response/user-pf-get-all-list/city';
import { Town } from '../../../models/response/user-pf-get-all-list/town';
import { GetActiveContractTemplateResponse } from '../../../models/response/get.active.contract.template.response';
import { GetActiveContractTemplateRequest } from '../../../models/request/get.active.contract.template.request';
import { TranslateService } from '@ngx-translate/core';
import { CorporateCustomer } from 'app/models/onboarding/corporate.customer';
import { Address } from 'app/models/onboarding/address';
import { Shop } from 'app/models/onboarding/shop';
import { MerchantCreateOnboardingDto } from 'app/models/onboarding/dto/merchant.onboarding.dto';
import { Status } from 'app/models/onboarding/status';
import { RequestMethod } from 'app/models/request/request.type.enum';
import { CommissionDto } from 'app/models/onboarding/commisions';
import { GibRequest } from 'app/models/request/gib.request';
import { MerchantService } from 'app/services/merchant.service';
import { GibResponse } from 'app/models/response/gib.response';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pwl-corporate-register',
  templateUrl: './pwl-corporate-register.component.html',
  styleUrls: ['./pwl-corporate-register.component.scss']
})
export class PwlCorporateRegisterComponent {

  public showStep1: boolean;
  public showStep2: boolean;
  public showStep3: boolean;
  public showStep4: boolean;
  public maxTab = 4;

  name: string;
  surname: string;
  citizenshipNumber: string;
  birthdate: string;
  iban: string;
  bussinessPhone: string;
  mailAddress: string;
  city: City;
  town: Town;
  address: string;
  commercialTitle: string;
  taxIdNumber: string;
  companyPartners: string;
  operatingCertificate: string;
  taxPlate: string;
  registryNewspaper: string;
  signatureCirculars: string;
  shopName: string;
  serviceIndustry: ParentSectorInfoResponse;
  productsInfos: string;
  website: string;
  facebook: string;
  youtube: string;
  instagram: string;
  twitter: string;
  cityList: City[];
  townList: Town[];
  townMap: Map<string, Town[]>;
  lang: string;

  gibResponse: GibResponse;

  parentSectorInfos: ParentSectorInfoResponse[];

  public hasFacebookLink: boolean = false;
  public hasYoutubeLink: boolean = false;
  public hasInstagramLink: boolean = false;
  public hasTwitterLink: boolean = false;
  public animations: boolean = true;
  title = 'contractModal';
  closeResult: string;
  contract1approved: Boolean = false;
  contract2approved: Boolean = false;
  contract3approved: Boolean = false;
  contract1: GetActiveContractTemplateResponse;
  contract2: GetActiveContractTemplateResponse;
  contract3: GetActiveContractTemplateResponse;
  openedContractTitle: string;
  openedContractContent: string;
  openedContractNumber: number;

  constructor(private pwlService: PwlService,
    private modalService: NgbModal,
    private messageService: MessageService,
    private userService: UserService,
    private translateService: TranslateService,
    private merchantService: MerchantService,
    private router: Router,
    private cdr: ChangeDetectorRef) {
    this.showStep1 = true;
    this.showStep2 = false;
    this.showStep3 = false;
    this.showStep4 = false;
    this.lang = this.translateService.currentLang.toLowerCase();
    this.getParentSectorInfos();
    this.getAllList();
  }

  ibanMask(event) {
    var iban = event.target.value.replaceAll(" ", "").replace(/\D/g, '');
    var maskedIban;
    if (iban < 2) {
      maskedIban = iban;
    } else {
      if (iban > 24) {
        iban = iban.slice(0, 24)
      }
      var firstTwoNumbers = iban.slice(0, 2);
      var otherNumbers = iban.slice(2, iban.length).replace(/(.{4})/g, '$1 ')
      maskedIban = firstTwoNumbers + " " + otherNumbers;
    }
    event.target.value = maskedIban.trim();
    this.iban = event.target.value;
  }

  openContactModelOpen(contractModel, contract: GetActiveContractTemplateResponse, contractNumber: number) {
    this.openedContractTitle = contract.title;
    this.openedContractContent = contract.content;
    this.openedContractNumber = contractNumber;
    this.modalService.open(contractModel, { size: <any>'xl', scrollable: true })
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


  changeSocialMediaSliderStatus(sliderName: string) {
    if (sliderName === 'facebook' && !this.hasFacebookLink) {
      this.facebook = "";
    }
    if (sliderName === 'youtube' && !this.hasYoutubeLink) {
      this.youtube = "";
    }
    if (sliderName === 'instagram' && !this.hasInstagramLink) {
      this.instagram = "";
    }
    if (sliderName === 'twitter' && !this.hasTwitterLink) {
      this.twitter = "";
    }
  }

  nextStep(stepNo: number) {
    if (stepNo == 2) {
      const verifyMernisPromise = this.verifyMernis();
      //const checkIbanPromise = this.checkIban();
      const gibQueryPromise = this.gibQuery();

      const promiseExecution = async () => {
        const promiseResult = await Promise.all([
          verifyMernisPromise,
          // checkIbanPromise
          gibQueryPromise,
        ])
        if (promiseResult[0] === true && promiseResult[1] === true) {
          this.showStep1 = false;
          this.showStep2 = true;
          this.cdr.detectChanges();
        } else {
          if (promiseResult[0] === false)
            this.messageService.addError('pwl-corporate-register.error.messages.verify.mernis');
          if (promiseResult[1] === false)
            this.messageService.addError('pwl-corporate-register.error.messages.gib.query');
        }
      };
      promiseExecution();
    }
    if (stepNo == 3) {
      this.showStep2 = false;
      this.showStep3 = true;
    }
    if (stepNo == 4) {
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
    if (this.contract1approved && this.contract2approved && this.contract3approved) {
      const corporateCustomer = new CorporateCustomer(this.name, this.surname, this.citizenshipNumber, this.birthdate, this.bussinessPhone, this.mailAddress, this.iban != null ? "TR" + this.iban.replace(/ /g, "") : "", this.commercialTitle, this.gibResponse?.info?.companyTitle, this.taxIdNumber, this.gibResponse?.info?.taxOffice, "", 44288, 200160, this.gibResponse?.info?.queryId, this.gibResponse?.info?.queryDate, this.gibResponse?.info?.companyTypeCode, this.gibResponse?.info?.activityFieldName);
      const address = new Address(this.city?.id, this.city?.name, this.town?.id, this.town?.name, this.address, "34000");
      const shop = new Shop(this.shopName, this.serviceIndustry?.description, String(this.serviceIndustry?.code), this.website, this.instagram, this.facebook, this.youtube, this.twitter);
      const state = new Status("SUBMITTED", "", "", "");
      const commisions = new CommissionDto(1.90, 1.80, 7, 2.9, 3.65, 4.55, 5.35, 6.08, 7.07, 7.85, 8.62, 9.38, 10.15, 10.92, 10.92, 10.92);
      const merchantCreateOnboardingDto = new MerchantCreateOnboardingDto(state, null, null, "CORPORATE", false, null, corporateCustomer, address, shop, null, commisions);
      this.pwlService.request(RequestMethod.POST, "merchant-service/external/onboarding/admin", merchantCreateOnboardingDto).subscribe();
      this.router.navigate(['/pwl-register-status/submitted']);
    } else {
      this.messageService.addError("Sözleşmeleri onaylayınız.");
      return;
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

  checkIban() {
    this.pwlService.checkIban(new CheckIbanRequest(this.iban, this.citizenshipNumber)).subscribe(
      (res) => {
        if (res != null && res.body != null) {
          return true;
        }
        return false;
      },
      (err) => {
        this.messageService.addError('pwl-corporate-register.error.messages.check.iban');
        return false;
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
        console.log("err", err);
      });
  }

  citySelect() {
    this.townList = this.townMap[this.city.id];
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

  gibQuery() {
    return this.merchantService.gibQuery(new GibRequest(this.taxIdNumber ? this.taxIdNumber : this.citizenshipNumber)).then(
      (res) => {
        if (res != null && res.body != null) {
          this.gibResponse = res.body;
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

