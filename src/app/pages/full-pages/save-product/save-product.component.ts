import { ChangeDetectorRef, Component, Directive, ElementRef, ViewChild } from '@angular/core';
import { FileHandle } from './dragDrop.directive';
import { PwlService } from '../../../services/pwl.service';
import { ActivatedRoute, Router } from "@angular/router";
import { throttleTime } from 'rxjs/operators';
import { MessageService } from "../../../shared/services/message.service";
import { RequestMethod } from 'app/models/request/request.type.enum';
import { SectorInfoResponse } from '../../../models/response/sector-info-response';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-save-product',
  templateUrl: './save-product.component.html',
  styleUrls: ['./save-product.component.scss'],
})
export class SaveProductComponent {
  isShown = false;
  public optional = false;
  public cargoInfo = false;
  public productShow = false;
  public productVariation = false;
  public productVariationDisabled = true;
  public tabInfo = false;
  public additionalService = false;
  newAttribute: any = {};
  sectorInfos: SectorInfoResponse[];

  /**
* Div Show
*/
  divDiscountShow: boolean = false;
  divOptionalInformationShow: boolean = false;
  divCargoInformationShow: boolean = false;
  divProductVariationShow: boolean = false;
  divProductShow: boolean = false;
  divTabInformationShow: boolean = false;
  divAdditionalServiceShow: boolean = false;

  /**
   * Responde Id
   */
  responseEdit: any = new Object();
  editPage: boolean = false;



  requestProductInformation: any = new Object();
  requestCargoPrice: any = new Object();
  requestAdditionalService: any = new Object();
  requestTabs: Object[] = new Array();

  /**
   * Tab
   */
  tabNames: Object[] = [];
  selectTabList: Object[] = new Array();


  /**
   * Variation
   */
  selectProductVariationOpenModal: any = false;
  selectProductVariationOne: any;
  selectProductVariationTwo: any;
  selectProductVariationList: Object[] = new Array();
  productVariationList: Object[] = new Array();

  categories: Object[];
  tabs: Object[] = [];
  productOptionTypes: Object[];


  /**
   * File
  */
  fieldArray: Array<any> = [];
  @ViewChild("fileDropRef", { static: false }) fileDropEl: ElementRef;
  files: any[] = [];

  constructor(private pwlService: PwlService, private cdr: ChangeDetectorRef, private router: Router, private route: ActivatedRoute, private messageService: MessageService) {
    this.getSectorInfo();
  }

  unique(a) {
    return a.sort().filter(function (value, index, array) {
      return (index === 0) || (value !== array[index - 1]);
    });
  }

  myForm: FormGroup = new FormGroup({
    name: new FormControl(null)
  });

  ngOnInit(): void {
    if (this.route.snapshot.params['id']) {
      this.editPage = true;
      this.pwlService.request(RequestMethod.POST, 'product-service/external/product-model/merchant/get', parseInt(this.route.snapshot.params['id'])).subscribe(
        //this.pwlService.request(RequestMethod.GET, 'product-service/external/product-model/merchant/' + this.route.snapshot.params['id']).subscribe(
        res => {
          if (res.status === 200) {
            const response: any = res.body;

            this.requestProductInformation.title = response.title;
            this.requestProductInformation.categoryIdentifier = response.categoryIdentifier;
            this.requestProductInformation.description = response.description;

            this.requestCargoPrice.value = response.cargoPrice
            this.divCargoInformationShow = this.requestCargoPrice.value ? true : false;
            this.divProductShow = response.visibleShop;

            this.requestAdditionalService.additionalServiceDescription = response.additionalServiceDescription;
            this.requestAdditionalService.additionalServicePrice = response.additionalServicePrice;
            this.requestAdditionalService.additionalServiceCustomerNote = response.additionalServiceCustomerNote;

            this.divAdditionalServiceShow = (response.additionalServiceDescription || response.additionalServicePrice || response.additionalServiceCustomerNote) ? true : false;

            this.selectTabList = response.productModelTabs?.map(p => Number(p.tabId));
            this.divTabInformationShow = this.selectTabList.length > 0;

            if (response.products.length === 1 && response.products[0].productOptions.length === 0) {

              this.requestProductInformation.productPrice = response.products[0].productSalesInfos[0].salePrice;
              this.requestProductInformation.productDiscountPrice = response.products[0].productSalesInfos[0].discountPrice;
              this.requestProductInformation.productStockAmount = response.products[0].productSalesInfos[0].stockAmount;

              if (this.requestProductInformation.productDiscountPrice) {
                this.divDiscountShow = true;
              }
            } else {
              this.divProductVariationShow = true;

              const findOptionTypeOne = response.productModelOptionTypeOrders.find(p => p.priority === 1);
              if (findOptionTypeOne) {
                this.selectProductVariationOne = this.productOptionTypes.find((p: any) => p.identifier === findOptionTypeOne.productOptionTypeId)
              }

              const findOptionTypeTwo = response.productModelOptionTypeOrders.find(p => p.priority === 2);
              if (findOptionTypeTwo) {
                this.selectProductVariationTwo = this.productOptionTypes.find((p: any) => p.identifier === findOptionTypeTwo.productOptionTypeId)
              }

              this.productVariationList = [];
              response.products.forEach(p => {


                const selectOptionOne = p.productOptions.find(t => t.productOptionTypeId === findOptionTypeOne?.productOptionTypeId)?.value;
                const selectOptionTwo = p.productOptions.find(t => t.productOptionTypeId === findOptionTypeTwo?.productOptionTypeId)?.value;

                console.log("selectOptionOne", selectOptionOne);
                console.log("selectOptionTwo", selectOptionTwo);
                this.productVariationList.push({
                  productSalesInfos: {
                    salePrice: p.productSalesInfos[0].salePrice,
                    discountPrice: p.productSalesInfos[0].discountPrice,
                    stockAmount: p.productSalesInfos[0].stockAmount,
                  },
                  selectOptionOne: selectOptionOne,
                  selectOptionTwo: selectOptionTwo,
                  productOptions: []
                });
              })

              //1. ve 2. Sırayı Belirleme İdsi Büyük Olan İlk Sırada
              /*
                            let productOptionTypeOneId;
                            let productOptionTypeTwp;


                            response.product.forEach(p => {
                              const orderOne = p.productOptions.find(t => t.order === 1);
                              if (orderOne) {

                                //this.productOptionTypes.find((x: any) => x.identifier === orderOne.)
                                this.selectProductVariationOne?.identifier
                                //productOptionTypeOne =  p.productOptions.find(t => t.order === 1).order;
                              }

                              if (p.productOptions.find(t => t.order === 2)) {

                              }
                            })

                            response.products.forEach(p => {
                              this.productVariationList.push({
                                productSalesInfos: {
                                  salePrice: p.productSalesInfos[0].salePrice,
                                  discountPrice: p.productSalesInfos[0].discountPrice,
                                  stockAmount: p.productSalesInfos[0].stockAmount,
                                },
                                productOptions: p.productOptions
                              });
                            })*/
              /*

                            const productOptions =
                    [{
                      productOptionTypeId: this.selectProductVariationOne?.identifier,
                      defaultValues: this.selectProductVariationOne?.productOptionTypeValues,
                    }, {
                      productOptionTypeId: this.selectProductVariationTwo?.identifier,
                      defaultValues: this.selectProductVariationTwo?.productOptionTypeValues
                    }
                    ]
                  this.productVariationList.push(new Object({
                    productSalesInfos: {},
                    productOptions
                  }));*/
            }

            console.log("product-service/external/product-model/merchant/get body", res.body);
            this.cdr.detectChanges();
          }
        },
        err => {
          console.log("err", err);
          this.messageService.addError(err.error.message);
        }
      );
    }
    this.getCategoryList();
    this.getProductOptionType();
    this.getTabList();
  }

  getCategoryList() {

    this.categories = [
      { identifier: 1, name: 'Televizyon', email: 'jill@email.com', age: 15, country: undefined, child: { state: 'Active' } },
      { identifier: 2, name: 'IOS Telefon', email: 'adam@email.com', age: 12, country: 'Telefon', child: { state: 'Active' } },
      { identifier: 3, name: 'Android Telefon', email: 'samantha@email.com', age: 30, country: 'Telefon', child: { state: 'Active' } },
      { identifier: 4, name: 'Oyun Konsolu', email: 'henry@email.com', age: 10, country: undefined, child: { state: 'Active' } },
      { identifier: 5, name: 'Günlük Ayakkabı', email: 'amalie@email.com', age: 12, country: 'Ayakkabı', child: { state: 'Active' } },
      { identifier: 6, name: 'Spor Ayakkabı', email: 'estefania@email.com', age: 21, country: 'Ayakkabı', child: { state: 'Active' } },
      { identifier: 7, name: 'Bot', email: 'adrian@email.com', age: 21, country: 'EcuAyakkabıador', child: { state: 'Active' } },
      { identifier: 8, name: 'Terlik', email: 'wladimir@email.com', age: 30, country: 'Ayakkabı', child: { state: 'Inactive' } },
      { identifier: 9, name: 'Buzdolabı', email: 'natasha@email.com', age: 54, country: 'Beyaz Eşya', child: { state: 'Inactive' } },
      { identifier: 10, name: 'Çamaşır Makinesi', email: 'nicole@email.com', age: 43, country: 'Beyaz Eşya', child: { state: 'Inactive' } },
      { identifier: 1, name: 'Bulaşık Makinesi', email: 'michael@email.com', age: 15, country: 'Beyaz Eşya', child: { state: 'Inactive' } },
      { identifier: 12, name: 'Ankastre', email: 'nicole@email.com', age: 43, country: 'Beyaz Eşya', child: { state: 'Inactive' } }
    ];
    /*
    this.pwlService.request(RequestMethod.GET, 'category-service/external/category/merchant/all').subscribe(
      res => {
        if (res.status === 200) {
          const body: any = res.body;
          this.categories = body?.content;
          this.cdr.detectChanges();
        }
      },
      err => {
        console.log("err 1", err);
        this.messageService.addError(err.error.message);
      }
    );*/
  }

  getProductOptionType() {
    this.pwlService.request(RequestMethod.GET, 'product-service/external/product-option-type/merchant/all', null).subscribe(
      res => {
        if (res.status === 200) {
          const body: any = res.body;
          this.productOptionTypes = body?.content;
          this.cdr.detectChanges();
          console.log("productOptionTypes", this.productOptionTypes);
        }
      },
      err => {
        console.log("err", err);
        this.messageService.addError(err.error.message);
      }
    );
  }

  getTabList() {
    this.pwlService.request(RequestMethod.GET, 'category-service/external/tab/merchant/all', null).subscribe(
      res => {
        if (res.status === 200) {
          const body: any = res.body;
          console.log("rest", res);
          this.tabNames = body?.content;
          this.cdr.detectChanges();
        }
      },
      err => {
        console.log("err 1", err);
        this.messageService.addError(err.error.message);
      }
    );
  }

  getProductOptionValue(id: number) {
    //console.log("productVariationList", id , this.productOptionTypes);
    //console.log("productVariationList filter", id, this.productOptionTypes.filter((p:any) => p.identifier === id));

    return this.productOptionTypes.filter((p: any) => p.identifier === id).map((p: any) => p.productOptionTypeValues);
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
  saveProductConfirmDialog() {
    if(this.editPage) {
      Swal.fire({
        text: "Ürünü güncellemek istediğinizden emin misiniz?",
        showCancelButton: true,
        confirmButtonText: "Evet",
        cancelButtonText: "Hayır?",
        title: 'Ürün Güncelleme'
      })
        .then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            this.saveProduct()
            Swal.fire('Güncellendi!', '', 'success')
          } else if (result.isDismissed) {
            Swal.fire('Güncellenmedi', '', 'info')
          }
        })
    }else{
      Swal.fire({
        text: "Ürünü kaydetmek istediğinizden emin misiniz?",
        showCancelButton: true,
        confirmButtonText: "Evet",
        cancelButtonText: "Hayır?",
        title: 'Ürün Kaydatme'
      })
        .then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            this.saveProduct()
            Swal.fire('Kayıt Başarılı!', '', 'success')
          } else if (result.isDismissed) {
            Swal.fire('Kayıt Başarısız', '', 'info')
          }
        })
    }
  }

  saveProduct() {

    console.log("requestProductInformation.title", this.requestProductInformation.title);
    console.log("responseEdit", this.responseEdit);


    let products = [];
    let productModelOptionTypeOrders = [];
    if (this.divProductVariationShow) {
      if(this.selectProductVariationOne) {
        productModelOptionTypeOrders.push({
          productOptionTypeId: this.selectProductVariationOne?.identifier,
          priority: 1
        })
      }
      if(this.selectProductVariationTwo) {
        productModelOptionTypeOrders.push({
          productOptionTypeId: this.selectProductVariationTwo?.identifier,
          priority: 2
        })
      }

      console.log(" this.productVariationList", this.productVariationList);
      console.log("this.selectProductVariationOne", this.selectProductVariationOne);
      this.productVariationList.forEach((p: any) => {

        if (p.selectOptionOne) {
          p.productOptions.push({
            productOptionTypeId: this.selectProductVariationOne?.identifier,
            value: p.selectOptionOne
          });
        }

        if (p.selectOptionTwo) {
          p.productOptions.push({
            productOptionTypeId: this.selectProductVariationTwo?.identifier,
            value: p.selectOptionTwo
          });
        }



      })
      products = this.productVariationList;
    } else {
      products = [{
        productSalesInfos: {
          discountPrice: this.divDiscountShow ? this.requestProductInformation.productDiscountPrice : undefined,
          salePrice: this.requestProductInformation.productPrice,
          stockAmount: this.requestProductInformation.productStockAmount
        }
      }]
    }

    let productModelTabs = [];
    if (this.divTabInformationShow) {
      productModelTabs = this.selectTabList.map(p => {
        return {
          tabId: p
        }
      });
    }

    const request = new Object({
      identifier: this.route.snapshot.params['id'],
      title: this.requestProductInformation.title,
      description: this.requestProductInformation.description,
      categoryIdentifier: this.requestProductInformation.categoryIdentifier,

      cargoPrice: this.divCargoInformationShow ? this.requestCargoPrice.value : undefined,
      visibleShop: this.divProductShow,
      additionalServiceDescription: this.divAdditionalServiceShow ? this.requestAdditionalService.additionalServiceDescription : undefined,
      additionalServicePrice: this.divAdditionalServiceShow ? this.requestAdditionalService.additionalServicePrice : undefined,
      additionalServiceCustomerNote: this.divAdditionalServiceShow ? this.requestAdditionalService.additionalServiceCustomerNote : undefined,

      productModelImages: [],
      productModelTabs: productModelTabs,
      productModelOptionTypeOrders: productModelOptionTypeOrders,
      products: products
    });

    console.log("request", request);

    if (this.editPage) {
      this.pwlService.request(RequestMethod.POST, 'product-service/external/product-model/merchant/update', request)
        .subscribe(
          res => {
            if (res.status === 200) {
              this.router.navigate(['/products']);
            }
          },
          err => {
            console.log("err", err);
            this.messageService.addError(err.error.message);
          }
        );
    } else {
      this.pwlService.request(RequestMethod.POST, 'product-service/external/product-model/merchant', request)
        .subscribe(
          res => {
            if (res.status === 200) {
              this.router.navigate(['/products']);
            }
          },
          err => {
            console.log("err", err);
            this.messageService.addError(err.error.message);
          }
        );
    }
  }








  selectTab(id: number, checked: boolean) {
    console.log("selectTab");
    if (this.selectTabList.find(p => p === id)) {
      this.selectTabList = this.selectTabList.filter(p => p !== id)
    } else {
      this.selectTabList.push(id)
    }
    console.log("this.selectTabList", this.selectTabList, id);
  }

  isSelectTab(id: number) {
    console.log("isSelectTab");
    return this.selectTabList.find(p => p === id);
  }
  /**
   * Tab Bilgisi Onurdan Alındı
   */

  addNewTab(title: string) {
    this.pwlService.request(RequestMethod.POST, 'category-service/external/tab/merchant', "{title : " + title + "}").subscribe(
      res => {
        if (res.status === 200) {
          this.tabNames.push(res.body);
          this.cdr.detectChanges();
        }
      },
      err => {
        console.log("err", err);
        this.messageService.addError("Sekme Eklenemedi");
      }
    );
  }

  deleteTab(id: number) {
    this.pwlService.request(RequestMethod.POST, 'category-service/external/tab/merchant/delete', "{ id :" + id + "}").subscribe(
      res => {
        if (res.status === 200) {
          this.tabNames = this.tabNames.filter((p: any) => p.identifier !== id);
          this.cdr.detectChanges();
        }
      },
      err => {
        console.log("err", err);
        this.messageService.addError(err.error.message);
      }
    );
  }

  /**
   * File Bilgisi Onurdan Alındı
   */

  onFileDropped($event) {
    this.prepareFilesList($event);
  }

  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
      this.messageService.addSuccess('Ürün görseli başarı ile yüklendi')
    }
    this.fileDropEl.nativeElement.value = '';
    this.uploadFilesSimulator(0);
  }

  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }

  fileBrowseHandler(files) {
    this.prepareFilesList(files);
  }

  deleteFile(index: number) {
    if (this.files[index].progress < 100) {
      console.log('Upload in progress.');
      return;
    }
    this.files.splice(index, 1);
  }

  optionalCard() {
    this.optional = !this.optional
  }
  cargoInfos() {
    this.cargoInfo = !this.cargoInfo
  }
  productShows() {
    this.productShow = !this.productShow
  }
  tabInfos() {
    this.tabInfo = !this.tabInfo;
  }
  additional() {
    this.additionalService = !this.additionalService;
  }
  productVar() {
    this.productVariation = !this.productVariation;
  }
  productVarItem() {
    this.productVariationDisabled = !this.productVariationDisabled;
  }
  addFieldValue() {
    this.fieldArray.push(this.newAttribute)
    this.newAttribute = {};
  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }

  getSectorInfo() {
    this.pwlService.getAllSectorInfos().subscribe(
      (res) => {
        if (res != null && res.body != null) {
          this.sectorInfos = res.body;
        }
      },
      async (err) => {
      });
  }

}
