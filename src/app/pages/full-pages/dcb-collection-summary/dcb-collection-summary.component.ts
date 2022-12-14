import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UserMerchant} from "../../../models/request/user.merchant";
import {UserService} from "../../../services/user.service";
import {MerchantService} from "../../../services/merchant.service";
import {MessageService} from "../../../shared/services/message.service";
import {NgxSpinnerService} from "ngx-spinner";
import {TranslateService} from "@ngx-translate/core";
import * as moment from "moment";
import {DatePipe} from "@angular/common";
import {HttpErrorResponse} from "@angular/common/http";
import {Merchant} from "../../../models/merchant";
import {DcbCollectionHistorySummaryResponse} from "../../../models/response/dcb-collection-history-summary/dcb.collection.history.summary.response";
import {DcbCollectionHistorySummaryBaseResponse} from "../../../models/response/dcb-collection-history-summary/dcb.collection.history.summary.base.response";
import {DcbCollectionHistorySummary} from "../../../models/request/dcb.collection.history.summary";
import Swal from "sweetalert2";
import {Error} from "../../../models/response/error";
import {MerchantId} from "../../../models/request/merchant.id";
import {ReturnLocalizedMessage} from '../../../util/return-localizedMessage';
import {MerchantIdsModel} from '../../../models/request/merchantIds.model';
import {MerchantLevelModel} from '../../../models/request/merchant-level-model';

@Component({
  selector: 'app-dcb-collection-summary',
  templateUrl: './dcb-collection-summary.component.html',
  styleUrls: ['./dcb-collection-summary.component.scss']
})
export class DcbCollectionSummaryComponent implements OnInit {
  dcbCollectionHistorySummaryResponse: DcbCollectionHistorySummaryResponse;
  currentDate: Date = new Date();
  current: any;
  past: any;
  isOne: boolean = false;
  l1: string;
  l2: string;
  l3: UserMerchant;
  isUserMerchantChild: boolean = false;
  startDate: any;
  endDate: any;
  isNoDataToDisplay: boolean = false;
  page = 1;
  showTable: boolean = true;
  collectionSize: number;
  pageSize: number;
  isPermission: boolean = false;
  dcbCollectionHistory: DcbCollectionHistorySummary;
  dcbCollections: DcbCollectionHistorySummaryBaseResponse[];
  numberOfPage:number;
  error:Error;
  localizedMessage:string;
  message: string;
  merchantIds: Array<MerchantLevelModel> = new Array<MerchantLevelModel>();


  constructor(private userService: UserService, private cdr: ChangeDetectorRef,
              private merchantService: MerchantService,
              private messageService: MessageService,
              private spinner: NgxSpinnerService,
              public translate: TranslateService) {

  }

  ngOnInit(): void {
   /* this.isOne = true;
    this.past = moment(this.currentDate).subtract(1, 'day').format("YYYY-MM-DD");
    this.current = moment(this.currentDate).format("YYYY-MM-DD");
    const merchant = JSON.parse(localStorage.getItem('merchantName'));
    const merchantIds = [];
    merchantIds.push({
      l1: merchant ? merchant.merchantId : null,
      l2: null,
      l3: null,
      l4: null
    });
    this.onDcbCollectionHistorySummary(merchantIds, 1, this.past, this.current);*/
    if (!this.dcbCollectionHistorySummaryAuthorities()) {
      return;
    }
  }

  dcbCollectionHistorySummaryAuthorities(): boolean {
    const account = JSON.parse(localStorage.getItem('account'));
    const authValue = account.authorities.includes('DCB_COLLECTION_HISTORY_SUMMARY');
    if (!authValue) {
      this.isPermission = false;
      this.message = 'error.access.denied.message';
      this.cdr.detectChanges();
      return false;
    }
    this.isPermission = true;
    this.isUserMerchantChild = true;
    this.showTable = false;
    this.cdr.detectChanges();
    return true;
  }

  merchantIdsListRequest() {
    this.merchantIds = [];
    this.merchantIds.push({
      l1: this.selectedMasterMerchant ? this.selectedMasterMerchant.merchantId : null,
      l2: this.selectedLl1Merchant ? this.selectedLl1Merchant.merchantId : null,
      l3: this.selectedLl2Merchant ? this.selectedLl2Merchant.merchantId : null,
      l4: this.selectedLl3Merchant ? this.selectedLl3Merchant.merchantId : null
    });
  }

  closeFix(event, datePicker) {
    if (event.target.offsetParent == null)
      datePicker.close();
    else if (event.target.offsetParent.nodeName != "NGB-DATEPICKER")
      datePicker.close();
  }

  dateDiff(startDate, endDate) {
    var start = new Date(startDate.year, startDate.month - 1, startDate.day, 0, 0, 0, 0);
    var end = new Date(endDate.year, endDate.month - 1, endDate.day, 0, 0, 0, 0);
    var timeDiff = Math.abs(end.getTime() - start.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays;
  }
  dateDiffIsBig(startDate, endDate) {
    var start = new Date(startDate.year, startDate.month - 1, startDate.day, 0, 0, 0, 0);
    var end = new Date(endDate.year, endDate.month - 1, endDate.day, 0, 0, 0, 0);
    if (start.getTime() > end.getTime()) {
      return true
    } else {
      return false
    }

  }

  dateObjToDate(vDate) {
    const datepipe: DatePipe = new DatePipe('tr-EN')
    var cDate = new Date(vDate.year, vDate.month - 1, vDate.day, 0, 0, 0, 0);
    let sDate = datepipe.transform(cDate, 'yyy-MM-dd');
    return sDate;
  }
  convertIdList (merchantList : Merchant[]) {
    let merchantIdList : MerchantId[] = [];
    for (let i = 0 ; i < merchantList.length ; i++){
      let merchantId = new MerchantId(merchantList[i].merchantId);
      merchantIdList.push(merchantId);
    }
    return merchantIdList;
  }


  /*onDcbCollectionHistorySummary(merchantIds: MerchantLevelModel[], activePage: number, startDate: string, endDate: string) {
    this.userService
    .dcbCollectionHistorySummary(new DcbCollectionHistorySummary(merchantIds, startDate, endDate, activePage))
    .subscribe(
      (res) => {
        if (res != null && res.collections != null) {
          this.isPermission = true;
          this.isUserMerchantChild = true;
          this.showTable = false;
          this.cdr.detectChanges();
        } else {
          this.isPermission = false;
          this.isUserMerchantChild = true;
          this.showTable = false;
          this.cdr.detectChanges();
        }
      },
      (err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 403) {
            this.isPermission = false;
            this.message = ReturnLocalizedMessage(err);
            this.cdr.detectChanges();
          } else {
            this.isPermission = false;
            this.message = ReturnLocalizedMessage(err);
            this.cdr.detectChanges();
          }
        }
      }
    );
  }*/

  isHistoryValidation(startDate, endDate) {
    if (!this.selectedMerchant) {
      this.messageService.addError(this.translate.instant('dcb.choose.merchant'));
      return;
    } else {
      this.messageService.remove();
    }
    if (startDate == null || endDate == null) {
      this.messageService.addError(this.translate.instant('dcb.startDate.and.EndDate.must'));
      return;
    } else {
      this.messageService.remove();
    }
    if (this.dateDiffIsBig(startDate, endDate)) {
      this.messageService.addError(this.translate.instant('dcb.startDate.cannot.greater.than.endDate'));
      return;
    } else {
      this.messageService.remove();
    }
   /* if (this.dateDiff(startDate, endDate) > 30) {
      this.messageService.addError(this.translate.instant('dcb.difference.between.startDate.and.endDate'));
      return;
    } else {
      this.messageService.remove();
      return true;
    }*/
    return true;


  }
  downloadFile(data: Blob) {
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(data);
    var fileName = "Export.xlsx";
    link.download = fileName;
    link.click();
  }

  onDcbCollectionExport(startDate, endDate, selectedPage: number) {
    if (!this.isHistoryValidation(startDate, endDate)) {
      return
    }
    this.merchantIdsListRequest();
    this.dcbCollectionHistory = new DcbCollectionHistorySummary(
      // this.convertIdList(this.selectedMerchant),
      this.merchantIds,
      this.dateObjToDate(startDate),
      this.dateObjToDate(endDate),
      selectedPage)
    this.spinner.show("spinner1");
    this.userService
    .dcbCollectionHistorySummaryExport(this.dcbCollectionHistory).subscribe(
      (response) => {
        this.spinner.hide("spinner1");
        this.downloadFile(response);
      },
      async (err) => {
        var result = JSON.parse(await err.error.text());
        Swal.fire({
          icon: 'error',
          title: '????leminiz yap??lamad??! ',
          confirmButtonText: 'Tamam',
          buttonsStyling: false,
          customClass: {
            confirmButton: 'btn btn-dark'
          },
          text: result.localizedMessage
        })
      });
  }


  onDcbCollectionHistorySummaryLast(startDate, endDate, selectedPage: number) {
    if (!this.isHistoryValidation(startDate, endDate)) {
      return
    }

    this.page = selectedPage ?? 1;
    this.merchantIdsListRequest();
    this.dcbCollectionHistory = new DcbCollectionHistorySummary(
     // this.convertIdList(this.selectedMerchant),
      this.merchantIds,
      this.dateObjToDate(startDate),
      this.dateObjToDate(endDate),
      this.page,
    )

    this.userService
    .dcbCollectionHistorySummary(this.dcbCollectionHistory).subscribe(
      (res) => {
        if(res != null && res.collections != null) {
          this.dcbCollectionHistorySummaryResponse = res;
          this.dcbCollections = this.dcbCollectionHistorySummaryResponse.collections;

          if (this.dcbCollections == null) {
            this.isPermission = false;
          }
          if (this.dcbCollections.length < 1) {
            this.showTable = false;
            this.isNoDataToDisplay = true;
          }
          if (this.dcbCollections.length >= 1) {
            this.showTable = true;
            this.isNoDataToDisplay = false;
          }
          this.cdr.detectChanges();
          this.numberOfPage = this.dcbCollectionHistorySummaryResponse.numberOfPage;
          this.collectionSize = res.totalCount;
          this.pageSize = res.pageSize;
        }
      },
      async(err) => {
        this.showTable = false;
        if (err instanceof HttpErrorResponse) {
          if (err.status === 403) {
            this.isPermission = false;
            this.message = ReturnLocalizedMessage(err);
            this.cdr.detectChanges();
          } else {
            Swal.fire({
              icon: 'error',
              title: '????leminiz yap??lamad??! ',
              confirmButtonText: 'Tamam',
              buttonsStyling: false,
              customClass: {
                confirmButton: 'btn btn-dark'
              },
              text: ReturnLocalizedMessage(err)
            })
            this.cdr.detectChanges();
          }
        }
      });
  }

  loadPage(page: number) {
    this.onDcbCollectionHistorySummaryLast(this.startDate, this.endDate, page)
  }

  firmError = false;
  isFirmModalOpen = false;

  openFirmModal(open: boolean): void {
    if (open) {
      this.merchantFilters = null;
      this.selectedMasterMerchant = null;
      this.ll1Merchants = null;
      this.selectedLl1Merchant = null;
      this.ll2Merchants = null;
      this.selectedLl2Merchant = null;
      this.ll3Merchants = null;
      this.selectedLl3Merchant = null;
      this.getMerchantFilter();
    } else {
      this.selectedMerchant = [];
      if ((this.merchantFilters == null || this.merchantFilters.length < 1)
        && this.selectedMasterMerchant) {
        this.selectedMerchant.push(this.selectedMasterMerchant);
      }

      if (this.merchantFilters && this.merchantFilters.length > 0) {
        if (this.merchantFilters.length == 1 && !this.merchantFilters[0].hasSub) {
          this.selectedMerchant.push(this.merchantFilters[0]);
        }
        if (this.selectedMasterMerchant) {
          this.selectedMerchant.push(this.selectedMasterMerchant);
        }
      }

      if (this.ll1Merchants && this.ll1Merchants.length > 0) {
        if (this.selectedLl1Merchant) {
          this.selectedMerchant.push(this.selectedLl1Merchant);
        }
      }

      if (this.ll2Merchants && this.ll2Merchants.length > 0) {
        if (this.selectedLl2Merchant) {
          this.selectedMerchant.push(this.selectedLl2Merchant);
        }
      }

      if (this.ll3Merchants && this.ll3Merchants.length > 0) {
        if (this.selectedLl3Merchant) {
          this.selectedMerchant.push(this.selectedLl3Merchant);
        }
      }
      this.selectedMerchants = this.selectedMerchant.reverse()
      this.lastSelectedMerchant = this.selectedMerchants[0]
      if (!this.selectedMerchant) {
        this.firmError = true;
        this.messageService.addError(this.translate.instant('dcb.choose.merchant'));
        return;
      }
      else {
        this.messageService.remove();
      }
    }
    this.isFirmModalOpen = open;
  }

  selectedMerchant: Merchant[];
  merchantFilters: Merchant[];
  selectedMasterMerchant: Merchant;
  ll1Merchants: Merchant[];
  selectedLl1Merchant: Merchant;
  ll2Merchants: Merchant[];
  selectedLl2Merchant: Merchant;
  ll3Merchants: Merchant[];
  selectedLl3Merchant: Merchant;
  selectedMerchants: Merchant[];
  lastSelectedMerchant: Merchant;

  getMerchantFilter() {
    const merchant = JSON.parse(localStorage.getItem('merchantName'));
    if (merchant) {
      this.merchantFilters = [];
      this.merchantFilters.push(merchant);
    }
    /*this.merchantService
    .merchantFilter()
    .subscribe(
      (res) => {
        if (res.body && res.body.length > 0) {
          this.merchantFilters = res.body;
          this.cdr.detectChanges();
        }
      },
      (err) => {
        this.messageService.addHttpError({
          httpErrorResponse: err,
          defaultMessage: null
        });
      }
    );*/
  }

  onSelectedMasterMerchantChange() {
    this.getChildMerchants(this.selectedMasterMerchant.merchantId, "ll1");
  }

  getOnL1MerchantChange() {
    this.getChildMerchants(this.selectedLl1Merchant.merchantId, "ll2");
  }

  getOnL2MerchantChange() {
    this.getChildMerchants(this.selectedLl2Merchant.merchantId, "ll3");
  }

  getOnL3MerchantChange() {
    this.getChildMerchants(this.selectedLl3Merchant.merchantId, "ll4");
  }

  getChildMerchants(merchantId, level) {
    this.merchantService
    .childMerchantList(merchantId)
    .subscribe(
      (res) => {
        this[level + 'Merchants'] = res.body;
        this.cdr.detectChanges();
      },
      (err) => {
        this.messageService.addHttpError({
          httpErrorResponse: err,
          defaultMessage: null
        });
      }
    );
  }
}




