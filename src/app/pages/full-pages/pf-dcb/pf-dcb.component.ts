import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PwlService} from '../../../services/pwl.service';
import {ParentSectorInfoResponse} from '../../../models/response/parent-sector-info-response';
import {GetActiveContractTemplateResponse} from '../../../models/response/get.active.contract.template.response';
import {GetActiveContractTemplateRequest} from '../../../models/request/get.active.contract.template.request';
import {MessageService} from '../../../shared/services/message.service';
import {TranslateService} from '@ngx-translate/core';
import {City} from '../../../models/response/user-pf-get-all-list/city';
import {Town} from '../../../models/response/user-pf-get-all-list/town';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {usernameValidator} from '../../../util/username.validators';
@Component({
  selector: 'app-pf-dcb',
  templateUrl: './pf-dcb.component.html',
  styleUrls: ['./pf-dcb.component.scss']
})
export class PfDcbComponent {

  parentSectorInfos: ParentSectorInfoResponse[];

  public animations = true;
  shopName: string;
  city: string;
  town: string;
  district: string;
  serviceIndustry: string;
  productsInfos: string;
  iban: string;
  facebook: string;
  youtube: string;
  twitter: string;
  instagram: string;
  storageMpMerchantInfos: any;
  contract1: GetActiveContractTemplateResponse;
  contract2: GetActiveContractTemplateResponse;
  contract3: GetActiveContractTemplateResponse;
  openedContractTitle: string;
  openedContractContent: string;
  openedContractNumber: number;
  cityList: City[];
  townList: Town[];
  townMap: Map<string, Town[]>
  pfdcbFormSubmit = false;
  lang: string;

  pfdcbForm = new FormGroup({
    shopName: new FormControl(null, [Validators.required]),
    serviceIndustry: new FormControl(null, [Validators.required]),
    productsInfos: new FormControl(null, [Validators.required]),
    iban: new FormControl(null, [Validators.required]),
    webSite: new FormControl(null, [Validators.required]),
    city: new FormControl(null, [Validators.required]),
    town: new FormControl(null, [Validators.required]),
    address: new FormControl(null, [Validators.required]),
    contract1approved: new FormControl(false, [Validators.required]),
    contract2approved: new FormControl(false, [Validators.required]),
    contract3approved: new FormControl(false, [Validators.required]),
    hasFacebookLink: new FormControl(false, [Validators.required]),
    hasTwitterLink: new FormControl(false, [Validators.required]),
    hasInstagramLink: new FormControl(false, [Validators.required]),
    hasYoutubeLink: new FormControl(false, [Validators.required]),
  });

  constructor(private modalService: NgbModal,
    private pwlService: PwlService,
    private messageService: MessageService,
    private translateService: TranslateService) {
    const mpMerchantInfos = JSON.parse(localStorage.getItem('mpMerchantInfos'));
    this.getParentSectorInfos();
    this.lang = this.translateService.currentLang.toLowerCase();
    this.getContract1();
    this.getContract2();
    this.getContract3();
    this.getAllList();
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

  citySelect() {
    this.townList = this.townMap[this.pfdcbForm.value.city];
  }

  changeSocialMediaSliderStatus(sliderName: string) {
    if (sliderName === 'facebook' && !this.pfdcbForm.value.hasFacebookLink) {
      this.pfdcbForm.patchValue({facebookLink: ""});
    }

    if (sliderName === 'twitter' && !this.pfdcbForm.value.hasTwitterLink) {
      this.pfdcbForm.patchValue({twitterLink: ""});
    }
    if (sliderName === 'instagram' && !this.pfdcbForm.value.hasInstagramLink) {
      this.pfdcbForm.patchValue({instagramLink: ""});
    }

    if (sliderName === 'youtube' && !this.pfdcbForm.value.hasYoutubeLink) {
      this.pfdcbForm.patchValue({youtubeLink: ""});
    }
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

  openContactModelOpen(contractModel, contract: GetActiveContractTemplateResponse, contractNumber: number) {
    this.openedContractTitle = contract.title;
    this.openedContractContent = contract.content;
    this.openedContractNumber = contractNumber;
    this.modalService.open(contractModel, {size: <any>'xl',scrollable: true})
  }

  contractApprove() {
    if (this.openedContractNumber == 1) {
      this.pfdcbForm.patchValue({contract1approved: true});
    }
    if (this.openedContractNumber == 2) {
      this.pfdcbForm.patchValue({contract2approved: true});
    }
    if (this.openedContractNumber == 3) {
      this.pfdcbForm.patchValue({contract3approved: true});
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
        this.messageService.addError('pwl-individual-register.error.messages.get.active.contract.template');
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
        this.messageService.addError('pwl-individual-register.error.messages.get.active.contract.template');
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
        this.messageService.addError('pwl-individual-register.error.messages.get.active.contract.template');
        return false;
      });
  }

  get formControl() {
    return this.pfdcbForm.controls;
  }

  checkMerchant() {
    /*
    if (!account.isMpMerchant) {
      this.merchantService.checkMerchant(new CheckMerchantDto('32')).subscribe(
        // this.userMerchantRequest.merchantId
        (res) => {
          //localStorage.store('mpMerchantInfos', res);
          localStorage.setItem('mpMerchantInfos',  JSON.stringify(res));
        },
        (err) => {
          this.messageService.addHttpError({
            httpErrorResponse: err,
            defaultMessage: 'company-selection.do.not.exist'
          });
        }
      );

    }
    */
  }
  
  onSubmit() {
    this.pfdcbFormSubmit = true;
    if (this.pfdcbForm.invalid) {
      return;
    }
  }
}
