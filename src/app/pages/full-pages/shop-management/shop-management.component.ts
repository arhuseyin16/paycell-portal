import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PwlService } from 'app/services/pwl.service';
import { CommissionRateResponse } from 'app/models/response/commission-rate-response';
import { MessageService } from 'app/shared/services/message.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RequestMethod } from 'app/models/request/request.type.enum';
import { AdminAppGetMerchantResource } from 'app/models/market-place/resource/admin.app.get.merchant.resource';
import { AdminAppUpdateMerchantDto } from 'app/models/market-place/dto/admin.app.update.merchant.dto';

@Component({
  selector: 'app-shop-management',
  templateUrl: './shop-management.component.html',
  styleUrls: ['./shop-management.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ShopManagementComponent {


  page = 4;
  email: '';
  telephone: '';
  shopName: '';
  banner: '';
  logo: '';
  description: '';
  productVariationList: Object[] = new Array();
  tabs: Object[] = [];

  installmentInStore = false;
  hasShopPage = false;
  hasSocialMediaLink = false;
  hasFacebookLink: false;
  facebookLink = '';
  hasTwitterLink = false;
  twitterLink = '';
  hasInstagramLink = false;
  instagramLink = '';
  hasYoutubeLink = false;
  youtubeLink = '';
  holidayModeOn = false;
  showOutOfStockItems = false;
  courierInfo = false;
  courierInfoSelection = '';
  freeCargo = false;
  courierPaymentPrice: number;
  courierChartPayment = false;
  courierPayment = false;
  courierChartPaymentPrice: number;
  returnAddressInfo: string;
  cargoPriceCalculateSelection: string;

  isDirty = false;
  imgLogo: File;
  imgCover: File;
  fileToUpload: any;
  imageUrl: any;
  fileToNewUload;
  newImageUrl;
  commissionRates: CommissionRateResponse[];
  tabNames: Object[] = [];
  shopManagementSave: Object[];
  shopFormSubmit = false;
  shopForm = new FormGroup({
    shopDescriptionForm: new FormControl(null, [Validators.required]),
    webLinkForm: new FormControl(null, [Validators.required]),
    shopNameForm: new FormControl(null, [Validators.required]),
    courierPaymentPriceForm: new FormControl(null, [Validators.required]),
    courierChartPaymentForm: new FormControl(null, [Validators.required])


  });

  constructor(private modalService: NgbModal,
    private pwlService: PwlService,
    private messageService: MessageService,
    private cdr: ChangeDetectorRef) {
    this.getAllCommissionRates();
    this.getShopManagementResourceInfoById();


  }
  getShopManagementResourceInfoById() {
    this.pwlService.request(RequestMethod.GET, 'merchant-service/admin/merchant', null).subscribe(
      (res) => {

        if (res != null && res.body != null) {
          const adminAppGetMerchantResource: AdminAppGetMerchantResource = res.body;

          this.installmentInStore = adminAppGetMerchantResource.installmentInStore;

          this.hasShopPage = adminAppGetMerchantResource.hasShopPage;
          this.shopForm.patchValue({ shopNameForm: adminAppGetMerchantResource.shopName });
          this.shopForm.patchValue({ webLinkForm: adminAppGetMerchantResource.shopUrl });
          this.shopForm.patchValue({ shopDescriptionForm: adminAppGetMerchantResource.description });
          this.holidayModeOn = adminAppGetMerchantResource.holidayModeOn;
          this.showOutOfStockItems = adminAppGetMerchantResource.showOutOfStockItems;

          if (adminAppGetMerchantResource.courierInfoSelection != null && adminAppGetMerchantResource.courierInfoSelection != '') {
            this.courierInfo = true;
            this.courierInfoSelection = adminAppGetMerchantResource.courierInfoSelection;
          }
          this.freeCargo = adminAppGetMerchantResource.freeCargo;
          this.courierPayment = adminAppGetMerchantResource.courierPayment;
          if (adminAppGetMerchantResource.courierPaymentPrice != null) {
            this.courierPaymentPrice = adminAppGetMerchantResource.courierPaymentPrice;
          }
          this.courierChartPayment = adminAppGetMerchantResource.courierChartPayment;
          if (adminAppGetMerchantResource.courierChartPaymentPrice != null) {
            this.courierChartPaymentPrice = adminAppGetMerchantResource.courierPaymentPrice;
          }
          this.returnAddressInfo = adminAppGetMerchantResource.returnAddressInfo;
          this.cargoPriceCalculateSelection = adminAppGetMerchantResource.cargoPriceCalculateSelection;
        }
      },
      (err) => {
        this.messageService.addError('Hata')
      });

  }

  saveShopManagementInfo() {
    const adminAppUpdateMerchantDto: AdminAppUpdateMerchantDto = new AdminAppUpdateMerchantDto(
      this.installmentInStore,

      this.hasShopPage,
      this.logo,
      this.banner,
      this.shopForm.controls.shopNameForm.value,
      this.shopForm.controls.webLinkForm.value,
      this.shopForm.controls.shopDescriptionForm.value,
      this.holidayModeOn,
      this.showOutOfStockItems,

      this.courierInfoSelection,
      this.freeCargo,
      this.courierPayment,
      this.courierPaymentPrice,
      this.courierChartPayment,
      this.courierChartPaymentPrice,
      this.returnAddressInfo,
      this.cargoPriceCalculateSelection
    )

    this.pwlService.request(RequestMethod.POST, 'merchant-service/admin/merchant', adminAppUpdateMerchantDto).subscribe(
      (res) => {
        if (res.status === 200) {
          const body: any = res.body;
          this.shopManagementSave = body?.content;
          this.messageService.addSuccess('Başarılı');
          this.cdr.detectChanges();
        }
      },
      (err) => {
        this.messageService.addError('Hata');
      });
  }

  getAllCommissionRates() {
    this.pwlService.getAllCommissionRates().subscribe(
      (res) => {
        if (res != null && res.body != null) {
          this.commissionRates = res.body;
          this.cdr.detectChanges();
        }
      },
      (err) => {
        this.messageService.addError('shop-management.error.messages.commission.rates');
      });
  }


  createNewVariation() {
    this.productVariationList.push(new Object({
      productSalesInfos: {},
      productOptions: []
    }));
  }

  deleteProductVariationList(index: number) {
    this.productVariationList.splice(index, 1);
  }

  changeSliderStatus(sliderName: string) {

    if (sliderName === 'installmentInStore') {
      this.installmentInStore = !this.installmentInStore;
    }


    if (sliderName === 'courierInfo') {
      this.courierInfo = !this.courierInfo;
      if (!this.courierInfo) {
        this.courierInfoSelection = '';
      }
    }

    if (sliderName === 'freeCargo') {
      this.freeCargo = !this.freeCargo;
      if (this.freeCargo === true) {
        this.courierPayment = false;
        this.courierPaymentPrice = null;
        this.courierChartPayment = false;
        this.courierChartPaymentPrice = null;
      }
    }

    if (sliderName === 'courierPayment') {
      this.courierPayment = !this.courierPayment;
      if (!this.courierPayment) {
        this.courierPaymentPrice = null;
      }
    }

    if (sliderName === 'courierChartPayment') {
      this.courierChartPayment = !this.courierChartPayment;
      if (!this.courierChartPayment) {
        this.courierChartPaymentPrice = null;
      }
    }

  }


  changeSocialMediaSliderStatus(sliderName: string) {
    if (sliderName === 'facebook' && !this.hasFacebookLink) {
      this.facebookLink = '';
    }

    if (sliderName === 'twitter' && !this.hasTwitterLink) {
      this.twitterLink = '';
    }

    if (sliderName === 'instagram' && !this.hasInstagramLink) {
      this.instagramLink = '';
    }

    if (sliderName === 'youtube' && !this.hasYoutubeLink) {
      this.youtubeLink = '';
    }
  }


  get formControl() {
    return this.shopForm.controls;
  }

  onSubmit() {
    this.shopFormSubmit = true;
    if (this.shopForm.invalid) {
      return;
    } else {
      return this.shopForm === this.shopForm;
    }
  }

  onFileChanged(event) {
    this.imgLogo = event.target.files[0];
  }

  onFilePick(event) {
    this.imgCover = event.target.files[1];
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  handleFileInputNew(file: FileList) {
    this.fileToNewUload = file.item(0);

    const newReader = new FileReader();
    newReader.onload = (event: any) => {
      this.newImageUrl = event.target.result;
    }
    newReader.readAsDataURL(this.fileToNewUload);
  }
}
