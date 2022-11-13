import {ChangeDetectorRef, Component, QueryList, ViewChild, ViewChildren, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {DcbTransactionHistory} from "../../../models/request/dcb.transaction.history";
import {DcbTransactionHistoryResponse} from "../../../models/response/user-dcb-transaction-history/dcb.transaction.history.response";
import {DcbTransactionHistoryOrderResponse} from "../../../models/response/user-dcb-transaction-history/dcb.transaction.history.order.response";
import * as moment from "moment";
import {UserMerchant} from "../../../models/request/user.merchant";
import {Merchant} from "../../../models/merchant";
import {MerchantService} from "../../../services/merchant.service";
import {MessageService} from "../../../shared/services/message.service";
import {NgxSpinnerService} from "ngx-spinner";
import {DatePipe} from '@angular/common';
import {HttpErrorResponse} from "@angular/common/http";
import {TranslateService} from "@ngx-translate/core";
import Swal from "sweetalert2";
import {Error} from "../../../models/response/error";
import {MerchantId} from "../../../models/request/merchant.id";
import {ReturnLocalizedMessage} from '../../../util/return-localizedMessage';
import {DcbRefundModel} from '../../../models/request/dcb.refund.model';
import {MerchantIdsModel} from '../../../models/request/merchantIds.model';
import {MerchantLevelModel} from '../../../models/request/merchant-level-model';
@Component({
    selector: 'app-dcb-transaction',
    templateUrl: './dcb-transaction.component.html',
    styleUrls: ['./dcb-transaction.component.scss']
})
export class DcbTransactionComponent implements OnInit {
    orderNo: string;
    selectedFundingSourceType: string;
    selectedOrderType: string;
    selectedPaymentStatus: string;
    dcbTransactionHistoryResponse: DcbTransactionHistoryResponse;
    currentDate: Date = new Date();
    current: any;
    past: any;
    isOpen: boolean = false;
    returnIsOpen = false;
    returnToModel: any;
    detailOrderNo: string;
    detailOrderDate: string;
    detailOrderType: string;
    isOne: boolean = false;
    l1: string;
    l2: string;
    l3: UserMerchant;
    isUserMerchantChild: boolean = false;
    startDate: any;
    endDate: any;
    isNoDataToDisplay: boolean = false;
    pfFilter: number[] = [];
    page = 1;
    showTable: boolean = true;
    collectionSize: number;
    pageSize: number;
    isPermission: boolean = false;
    dcbTransactionHistory: DcbTransactionHistory;
    dcbMerchantName: string;
    dcbServiceId: number;
    dcbServiceName: string;
    orderId: number;
    transactionAmount: number;
    commissionAmount: number;
    commissionRate: string;
    fundingSourceType: string;
    paymentType: string;
    orderType: string;
    paymentStatus: string;
    merchantPaymentDate: string;
    numberOfPage: number;
    totalCount: number;
    dcbOrders:DcbTransactionHistoryOrderResponse[];
    detailDcbMerchantName:string;
    detailDcbSubMerchantName:string;
    detailDcbServiceName:string;
    detailTransactionId:string;
    detailFundingSourceType:string;
    detailPaymentType:string;
    detailPaymentStatus:string;
    detailParam1:string;
    detailParam2:string;
    detailParam3:string;
    detailTransactionAmount:number;
    detailCommissionAmount:number;
    detailCommissionRate:number;
    detailMerchantPaymentDate: string;
    error:Error;
    localizedMessage:string;
    message: string;
    checkValue: boolean;
    refundAmount: any;
    refundReason: string;
    netAmount = false;
    dcbRefundDto: DcbRefundModel = new DcbRefundModel();
    summaryRefund = false;
    merchantIds: Array<MerchantLevelModel> = new Array<MerchantLevelModel>();

  constructor(private userService: UserService,
                private cdr: ChangeDetectorRef,
                private merchantService: MerchantService,
                private messageService: MessageService,
                private spinner: NgxSpinnerService,
                public translate: TranslateService) {}

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
        this.onDcbPermission(merchantIds, this.past, this.current, null, null, null, null, 1);*/
      if (!this.dcbTransactionHistoryAuthorities()) {
        return;
      }
    }

  dcbTransactionHistoryAuthorities(): boolean {
    const account = JSON.parse(localStorage.getItem('account'));
    const authValue = account.authorities.includes('DCB_TRANSACTION_HISTORY');
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
    fundingSourceTypeItem = [
        {id: 1, name: 'Mobil Ödeme', orginalName: 'MOBIL ODEME'},
        {id: 2, name: 'Hediye Para', orginalName: 'HEDIYE PARA'}

    ];
    orderTypesItem = [
        {id: 1, name: 'Satış', orginalName: 'SATIS'},
        {id: 2, name: 'İade', orginalName: 'IADE'}

    ];

    paymentStatusItem = [
        {id: 1, name: 'Ödendi', orginalName: 'ODENDI'},
        {id: 2, name: 'Ödenmedi', orginalName: 'ODENMEDI'}
    ];

  /*  onDcbPermission(merchantIds: Array<MerchantLevelModel>, startDate: string, endDate: string, orderId: number, fundingSourceType: string, orderType: string, paymentStatus: string, activePage: number) {
        this.userService
            .dcbTransactionHistory(new DcbTransactionHistory(merchantIds, startDate, endDate, orderId, fundingSourceType, orderType, paymentStatus, activePage))
            .subscribe(
                (res) => {
                  if (res != null && res.orders != null) {
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

    isValidation(startDate, endDate) {
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
        /*if (this.dateDiff(startDate, endDate) > 30) {
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

    merchantIdsListRequest() {
      this.merchantIds = [];
      this.merchantIds.push({
        l1: this.selectedMasterMerchant ? this.selectedMasterMerchant.merchantId : null,
        l2: this.selectedLl1Merchant ? this.selectedLl1Merchant.merchantId : null,
        l3: this.selectedLl2Merchant ? this.selectedLl2Merchant.merchantId : null,
        l4: this.selectedLl3Merchant ? this.selectedLl3Merchant.merchantId : null,
      });
    }

    onDcbTransactionExport(startDate, endDate, selectedPage: number) {
        if (!this.isValidation(startDate, endDate)) {
            return
        }
        this.merchantIdsListRequest();
        this.dcbTransactionHistory = new DcbTransactionHistory(
           // this.convertIdList(this.selectedMerchant),
          this.merchantIds,
            this.dateObjToDate(startDate),
            this.dateObjToDate(endDate),
            this.orderId,
            this.selectedFundingSourceType,
            this.selectedOrderType,
            this.selectedPaymentStatus,
            selectedPage)

        this.spinner.show("spinner1");
        this.userService
            .dcbTransactionHistoryExport(this.dcbTransactionHistory).subscribe(
                (response) => {
                    this.spinner.hide("spinner1");
                    this.downloadFile(response);
                },
          async (err) => {
            var result = JSON.parse(await err.error.text());
            Swal.fire({
              icon: 'error',
              title: 'İşleminiz yapılamadı! ',
              confirmButtonText: 'Tamam',
              buttonsStyling: false,
              customClass: {
                confirmButton: 'btn btn-dark'
              },
              text: ReturnLocalizedMessage(err)
            })
          });
    }


    onDcbTransactionList(startDate, endDate, selectedPage: number) {
        if (!this.isValidation(startDate, endDate)) {
            return
        }

        this.page = selectedPage ?? 1;

        this.merchantIdsListRequest();
        this.dcbTransactionHistory = new DcbTransactionHistory(
          //  this.convertIdList(this.selectedMerchant),
          this.merchantIds,
            this.dateObjToDate(startDate),
            this.dateObjToDate(endDate),
            this.orderId,
            this.selectedFundingSourceType,
            this.selectedOrderType,
            this.selectedPaymentStatus,
            this.page)

        this.userService
            .dcbTransactionHistory(this.dcbTransactionHistory).subscribe(
                (res) => {
                    if(res != null && res.orders != null) {
                      this.dcbTransactionHistoryResponse = res;
                      this.dcbOrders = this.dcbTransactionHistoryResponse.orders;
                      if (this.dcbOrders == null) {
                        this.isPermission = false;
                      }
                      if (this.dcbOrders.length < 1) {
                        this.showTable = false;
                        this.isNoDataToDisplay = true;
                      }
                      if (this.dcbOrders.length >= 1) {
                        this.showTable = true;
                        this.isNoDataToDisplay = false;
                      }
                      this.cdr.detectChanges();
                      this.numberOfPage = this.dcbTransactionHistoryResponse.numberOfPage;
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
                   title: 'İşleminiz yapılamadı! ',
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
        this.onDcbTransactionList(this.startDate, this.endDate, page)
    }

  transactionDetail(detail: DcbTransactionHistoryOrderResponse) {
      this.detailDcbMerchantName = detail.dcbMerchantName
      this.detailDcbSubMerchantName = detail.dcbSubMerchantName
      this.detailDcbServiceName = detail.dcbServiceName
      this.detailOrderNo = detail.orderId;
      this.detailTransactionId = detail.transactionId
    if (detail.orderType == "SATIS") {
      this.detailOrderType = this.translate.instant('dcb.sale')
    }
    if (detail.orderType == 'IADE') {
      this.detailOrderType = this.translate.instant('dcb.refund')
    }

    if(detail.fundingSourceType =='MOBIL ODEME'){
      this.detailFundingSourceType = this.translate.instant('dcb.mobile.payment')
    }

    if(detail.fundingSourceType =='HEDIYE PARA'){
      this.detailFundingSourceType = this.translate.instant('dcb.gift.money')
    }
    this.detailPaymentType = detail.paymentType
    this.detailPaymentStatus = detail.paymentStatus
    this.detailTransactionAmount = detail.transactionAmount
    this.detailCommissionRate = detail.commissionRate
    this.detailCommissionAmount = detail.commissionAmount

    this.detailOrderDate = detail.orderDate
    this.detailMerchantPaymentDate = detail.merchantPaymentDate
    this.detailParam1 = detail.param1;
    this.detailParam2 = detail.param2;
    this.detailParam3 = detail.param3;

  }

  openTransactionDetailModal(open: boolean): void {
        this.isOpen = open;
    }

  refundSummaryCancel(close: boolean) {
      this.summaryRefund = close;
    if (this.checkValue && this.refundAmount) {
      const splitRefund = this.refundAmount.toString().split('.');
      if (splitRefund.length > 1) {
        if (splitRefund[1].length === 0) {
          this.refundAmount = splitRefund[0];
        } else {
          this.refundAmount = splitRefund[0] + ',' + splitRefund[1];
        }
      } else if (splitRefund.length === 1) {
        this.refundAmount = splitRefund[0];
      }
    }
  }

  refundSummaryCloseIcon() {
      this.refundSummaryCancel(false);
      this.refundModal(false);
  }

  refundSummaryContinue() {
    this.userService.getRefund(this.dcbRefundDto).subscribe(res => {
      this.refundSummaryCancel(false);
      this.refundModal(false);
      this.dcbRefundSwallMessageSuccess();
      this.onDcbTransactionList(this.startDate, this.endDate, 1);
    }, async(err) => {
      if (err instanceof HttpErrorResponse) {
        this.refundSummaryCloseIcon();
        this.dcbRefundSwallMessageError(err);
        this.cdr.detectChanges();
      }
    });
  }

  authoritiesValid(auth: string): boolean {
    const account = JSON.parse(localStorage.getItem('account'));
    const authValue = account.authorities.includes(auth);
    if (!authValue) {
      this.dcbRefundSwallMessageAuth();
      return false;
    }
    return true;
  }

  dcbRefundSwallMessageAuth() {
    Swal.fire({
      icon: 'warning',
      title: this.translate.instant('pf.warning'),
      confirmButtonText:  this.translate.instant('pf.ok'),
      buttonsStyling: false,
      customClass: {
        confirmButton: 'btn btn-dark'
      },
      text: this.translate.instant('pf.access.denied'),
    });
  }

  dcbRefundSwallMessageSuccess() {
    Swal.fire({
      icon: 'success',
      title: this.translate.instant('dcb.successful'),
      confirmButtonText:  this.translate.instant('pf.ok'),
      buttonsStyling: false,
      customClass: {
        confirmButton: 'btn btn-dark'
      },
      text: this.translate.instant('dcb.refund.success'),
    });
  }

  dcbRefundSwallMessageError(err: HttpErrorResponse) {
    Swal.fire({
      icon: 'error',
      title: this.translate.instant('dcb.refund.error'),
      confirmButtonText:  this.translate.instant('pf.ok'),
      buttonsStyling: false,
      customClass: {
        confirmButton: 'btn btn-dark'
      },
      text: ReturnLocalizedMessage(err),
    });
  }

  refundModal(open: boolean, row?: any): void {
    if (!this.authoritiesValid('DCB_REFUND')) {
      return;
    }
    if (open) {
      this.returnToModel = row;
    } else {
      this.checkValue = false;
      this.refundReason = null;
      this.refundAmount = null;
    }
    this.returnIsOpen = open;
    this.netAmount = false;
  }

  refundContinue() {
    if (!this.refundReasonValid()) {
      return;
    }
    if (!this.refundAmountValid()) {
      return;
    }
    if (!this.calculationValid()) {
      return;
    }
    const merchant = JSON.parse(localStorage.getItem('merchantName'));
    this.dcbRefundDto = {
      merchantId: merchant.merchantId,
      dcbMerchantId: this.returnToModel?.dcbMerchantId,
      transactionId: this.returnToModel?.transactionId,
      refundReason: this.refundReason,
      amount: this.returnToModel?.transactionAmount,
      refundAmount: this.checkValue ? Number(this.refundAmount) : this.returnToModel?.transactionAmount
    }
    if (this.dcbRefundDto) {
      this.summaryRefund = true;
    }
  }

  calculationValid(): boolean {
    if (this.refundAmount) {
      const splitAmount = this.refundAmount.split(',');
      if (splitAmount.length > 1) {
        if (splitAmount[1].length === 0) {
          this.refundAmount = splitAmount[0];
        } else {
          this.refundAmount = splitAmount[0] + '.' + splitAmount[1];
        }
      } else if (splitAmount.length === 1) {
        this.refundAmount = splitAmount[0];
      }
    }
    if (Number(this.refundAmount) > Number(this.returnToModel?.transactionAmount)) {
      const splitRefund = this.refundAmount.toString().split('.');
      if (splitRefund.length > 1) {
        if (splitRefund[1].length === 0) {
          this.refundAmount = splitRefund[0];
        } else {
          this.refundAmount = splitRefund[0] + ',' + splitRefund[1];
        }
      } else if (splitRefund.length === 1) {
        this.refundAmount = splitRefund[0];
      }
      this.netAmount = true;
      return false;
    }
    this.netAmount = false;
    return true;
  }

  refundReasonValid(): boolean {
    if (!this.refundReason) {
      this.messageService.addError(this.translate.instant('İade Sebebini Doldurmanız Gerekmektedir.'));
      return false;
    }
    if (this.refundReason.length > 400) {
      this.messageService.addError(this.translate.instant('400 karakterden fazla giremezsiniz.'));
      return false;
    }
    return true;
  }

  refundAmountValid(): boolean {
    if (this.checkValue) {
      if (!this.refundAmount) {
        this.messageService.addError(this.translate.instant('İşlem Tutarı Girmeniz Gereklidir.'));
        return false;
      }
    }
      return true;
  }
    //
    //    transactionDetail(detail: DcbTransactionHistoryResponse) {
    //
    //
    //    }
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

  refundAmountChange(e) {
    if (e) {
      this.netAmount = false;
    }
  }

  checkValueChange(e) {
    if (e === false) {
      this.netAmount = false;
      this.refundAmount = null;
    }
  }
}

