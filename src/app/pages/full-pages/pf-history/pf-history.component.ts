import {ChangeDetectorRef, Component, QueryList, ViewChild, ViewChildren, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {PfTransactionsHistory} from "../../../models/request/pf.transactions.history";
import {PfTransactionsHistoryBaseResponse} from "../../../models/response/user-pf-transactions-history/pf.transactions.history.base.response";
import {PfTransactionReverse} from "../../../models/request/pf.transactions.reverse";
import {PfTransactionRefund} from "../../../models/request/pf.transactions.refund";
import * as moment from "moment";
import {UserMerchant} from "../../../models/request/user.merchant";
import {Merchant} from "../../../models/merchant";
import {MerchantService} from "../../../services/merchant.service";
import {MessageService} from "../../../shared/services/message.service";
import {NgxSpinnerService} from "ngx-spinner";
import {DatePipe} from '@angular/common';
import {HttpErrorResponse} from "@angular/common/http";
import Swal from 'sweetalert2';
import {TranslateService} from "@ngx-translate/core";
import {AppConfig} from '../../../shared/app-config/app-config'
import {PfTransactionsHistoryResponse} from "../../../models/response/user-pf-transactions-history/pf.transactions.history.response";
import {ReturnLocalizedMessage} from '../../../util/return-localizedMessage';
@Component({
    selector: 'app-pf-history',
    templateUrl: './pf-history.component.html',
    styleUrls: ['./pf-history.component.scss']
})
export class PfHistoryComponent implements OnInit {
    rows = [];
    orderNo: string;
    selectedCardType: string;
    selectedOrderType: string;
    installmentType: string;
    selectedOrderStatus: string;
    pfResponses: PfTransactionsHistoryResponse;
    currentDate: Date = new Date();
    current: any;
    past: any;
    isOpen: boolean = false;
    isRefRevOpen: boolean = false;
    detailOrderNo: string;
    detailOrderDate: string;
    detailOrderTime: string;
    orderDate: string;
    modalInstallmentType: string;
    detailOrderAmount: number;
    orderAmount: number;
    detailCurrency: string;
    detailNetOrderAmount: number;
    netOrderAmount: number;
    detailOrderType: string;
    orderType: string;
    detailOrderStatus: string;
    orderStatus: string;
    detailInstallmentCount: string;
    detailUserName: string;
    installmentCount: string;
    detailBankResponseCode: string;
    bankResponseCode: string;
    detailBankResponseCodeDesc: string;
    detailAcquirerBankDesc: string;
    detailPaymentMethodType: string;
    detailIssuerBankCodeDesc: string;
    bankResponseCodeDesc: string;
    file_name: string = "pf_transactions_list";
    isOne: boolean = false;
    l1: string;
    l2: string;
    l3: UserMerchant;
    isUserMerchantChild: boolean = false;
    startDate: any;
    endDate: any;
    isNoDataToDisplay: boolean = false;
    pfFilter: number;
    page = 1;
    showTable: boolean = true;
    collectionSize: number;
    isPermission: boolean = false;
    detailReferenceNumber: number;
    pfTransHistory: PfTransactionsHistory;
    refundAmount: number;
    numberOfPage: number;
    totalCount: number;
  detailReconciliationDate: string;
  message: string;

    constructor(private userService: UserService, private cdr: ChangeDetectorRef,
        private merchantService: MerchantService,
        private messageService: MessageService,
        private spinner: NgxSpinnerService,
        private appConfig:AppConfig,
        public translate: TranslateService) {

    }

    ngOnInit(): void {
     /* this.isOne = true;
        this.past = moment(this.currentDate).subtract(1, 'day').format("YYYY-MM-DD");
        this.current = moment(this.currentDate).format("YYYY-MM-DD");
        const merchant = JSON.parse(localStorage.getItem('merchantName'));
        const merchantId = merchant ? merchant.merchantId : null;
      const merchantIds = [];
      if (merchant.hasSub === false) {
        merchantIds.push({
          merchantId: merchant.merchantId,
          subMerchantId: merchant.masterMerchantId,
          serviceId: null
        });
      } else {
        merchantIds.push({
          merchantId: merchant.merchantId,
          subMerchantId: null,
          serviceId: null
        });
      }
        this.onPfHistory(merchantIds, 1, this.past, this.current, null, null, null, null); */
      if (!this.pfHistoryAuthorities()) {
        return;
      }

    }

  pfHistoryAuthorities(): boolean {
    const account = JSON.parse(localStorage.getItem('account'));
    const authValue = account.authorities.includes('MP_TRANSACTION_DETAIL');
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
    orderTypes = [
        {id: 1, name: this.translate.instant('pf.refund'), orginalName: 'REFUND'},
        {id: 2, name: this.translate.instant('pf.preauth.reverse'), orginalName: 'PREAUTH_REVERSE'},
        {id: 3, name: this.translate.instant('pf.reverse'), orginalName: 'REVERSE'},
        {id: 4, name: this.translate.instant('pf.preauth'), orginalName: 'PREAUTH'},
        {id: 5, name: this.translate.instant('pf.sale'), orginalName: 'SALE'},
        {id: 6, name: this.translate.instant('pf.postauth'), orginalName: 'POSTAUTH'},
        {id: 7, name: this.translate.instant('pf.postauth.reverse'), orginalName: 'POSTAUTH_REVERSE'},
    ];

    orderStatuss = [
        {id: 1, name: this.translate.instant('pf.success'), orginalName: 'SUCCESS'},
        {id: 2, name: this.translate.instant('pf.fail'), orginalName: 'FAIL'},
        {id: 3, name: this.translate.instant('pf.processing'), orginalName: 'UNKNOWN'},
    ];

  installmentStatus = [
    {id: 1, name: this.translate.instant('pf.with.installment'), orginalName: 'WITH_INSTALLMENT'},
    {id: 2, name: this.translate.instant('pf.non.installment'), orginalName: 'NON_INSTALLMENT'},
  ];

  /*  onPfHistory(merchantIds: Array<any>, activePage: number, startDate: string, endDate: string, orderId: string, orderType: string, orderStatus: string, installmentType: string) {
        this.userService
            .pfTransactionsHistory(new PfTransactionsHistory(merchantIds, activePage, startDate, endDate, orderId, orderType, orderStatus, installmentType))
            .subscribe(
                (res) => {
                    this.isPermission = true;
                    this.isUserMerchantChild = true;
                    this.showTable = false;
                    this.cdr.detectChanges();
                },
                (err) => {
                    this.isNoDataToDisplay = true;
                  if (err instanceof HttpErrorResponse) {
                    if (err.status === 403) {
                      this.isPermission = false;
                      this.message = ReturnLocalizedMessage(err);
                      this.cdr.detectChanges();
                    }  else {
                      this.isPermission = false;
                      this.message = ReturnLocalizedMessage(err);
                      this.cdr.detectChanges();
                    }
                  }
                }
            );
    } */

    isHistoryValidation(startDate, endDate, selectedPage: number, selectedMerchant: Merchant) {
        if (!this.selectedMerchant) {
            this.messageService.addError(this.translate.instant('pf.choose.merchant'));
            return;
        } else {
            this.messageService.remove();
        }
        if (startDate == null || endDate == null) {
            this.messageService.addError(this.translate.instant('pf.startDate.and.EndDate.must'));
            return;
        } else {
            this.messageService.remove();
        }
        if (this.dateDiffIsBig(startDate, endDate)) {
            this.messageService.addError(this.translate.instant('pf.startDate.cannot.greater.than.endDate'));
            return;
        } else {
            this.messageService.remove();
        }
       /* if (this.dateDiff(startDate, endDate) > 31) {
            this.messageService.addError(this.translate.instant('pf.difference.between.startDate.and.endDate'));
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

    onPfHistoryExport(startDate, endDate, selectedPage: number, selectedMerchant: Merchant) {
        if (!this.isHistoryValidation(startDate, endDate, selectedPage, selectedMerchant)) {
            return
        }
      const merchantIds = [];
      if (this.selectedMasterMerchant.hasSub === false) {
        merchantIds.push({
          merchantId: this.selectedMasterMerchant.merchantId,
          subMerchantId: this.selectedMasterMerchant.masterMerchantId,
          serviceId: null
        })
      } else {
        merchantIds.push({
          merchantId: this.selectedMasterMerchant.merchantId,
          subMerchantId: this.selectedLl1Merchant ? this.selectedLl1Merchant.merchantId : null,
          serviceId: this.selectedLl2Merchant ? this.selectedLl2Merchant.merchantId : null
        });
      }
        this.pfTransHistory = new PfTransactionsHistory(
            merchantIds,
            selectedPage,
            this.dateObjToDate(startDate),
            this.dateObjToDate(endDate),
            this.orderNo, this.selectedOrderType,
            this.selectedOrderStatus,
            this.installmentType)
        this.spinner.show("spinner1");
        this.userService
            .pfTransactionsHistoryExport(this.pfTransHistory).subscribe(
                (response) => {
                    this.spinner.hide("spinner1");
                    this.downloadFile(response);
                },
          async (err) => {
            if (err instanceof HttpErrorResponse) {
              const result = JSON.parse( await err.error.text());
              this.errorModalMessage(result, err);
            }
          });
    }

    errorModalMessage(result: any, err: HttpErrorResponse) {
      let splitErrorMessage = null;
      if (result.localizedMessage) {
        splitErrorMessage = result.localizedMessage.split('[');
      }
      Swal.fire({
        icon: 'error',
        title: this.translate.instant('pf.transaction.not.completed'),
        confirmButtonText: this.translate.instant('pf.ok'),
        buttonsStyling: false,
        customClass: {
          confirmButton: 'btn btn-dark'
        },
        text: splitErrorMessage[0] ? splitErrorMessage[0] : ReturnLocalizedMessage(err)
      });
      this.cdr.detectChanges();
    }


    onPfHistoryLast(startDate, endDate, selectedPage: number, selectedMerchant: Merchant) {
        if (!this.isHistoryValidation(startDate, endDate, selectedPage, selectedMerchant)) {
            return
        }

        this.page = selectedPage ?? 1;

      const merchantIds = [];
      if (this.selectedMasterMerchant.hasSub === false) {
        merchantIds.push({
          merchantId: this.selectedMasterMerchant.merchantId,
          subMerchantId: this.selectedMasterMerchant.masterMerchantId,
          serviceId: null
        })
      } else {
        merchantIds.push({
          merchantId: this.selectedMasterMerchant.merchantId,
          subMerchantId: this.selectedLl1Merchant ? this.selectedLl1Merchant.merchantId : null,
          serviceId: this.selectedLl2Merchant ? this.selectedLl2Merchant.merchantId : null
        });
      }

        this.pfTransHistory = new PfTransactionsHistory(
          merchantIds,
            this.page,
            this.dateObjToDate(startDate),
            this.dateObjToDate(endDate),
            this.orderNo,
            this.selectedOrderType,
            this.selectedOrderStatus,
            this.installmentType)

        this.userService
            .pfTransactionsHistory(this.pfTransHistory).subscribe(
                (res) => {
                    this.pfResponses = res;
                    if (this.pfResponses == null) {
                        this.isPermission = false;
                    }
                    if (this.pfResponses.historyTransactions.length < 1) {
                        this.showTable = false;
                        this.isNoDataToDisplay = true;
                    }
                    if (this.pfResponses.historyTransactions.length >= 1) {
                        this.showTable = true;
                        this.isNoDataToDisplay = false;
                    }
                    this.cdr.detectChanges();
                    this.numberOfPage = this.pfResponses.numberOfPage;
                    this.collectionSize = res.totalCount;
                  },
                (err) => {
                    this.isNoDataToDisplay = true;
                    this.showTable = false;
                  if (err instanceof HttpErrorResponse) {
                    if (err.status === 403) {
                      this.isPermission = false;
                      this.message = ReturnLocalizedMessage(err);
                      this.cdr.detectChanges();
                    } else {
                      this.isNoDataToDisplay = false;
                      this.showTable = false
                      Swal.fire({
                        icon: 'error',
                        title: this.translate.instant('pf.transaction.not.completed'),
                        confirmButtonText: this.translate.instant('pf.ok'),
                        buttonsStyling: false,
                        customClass: {
                          confirmButton: 'btn btn-dark'
                        },
                        text: ReturnLocalizedMessage(err)
                      });
                      this.cdr.detectChanges();
                    }
                  }
                }
            );
    }

    loadPage(page: number, selectedMerchant: Merchant) {
        this.onPfHistoryLast(this.startDate, this.endDate, page, selectedMerchant)
    }
    pfSwallMessage() {
        Swal.fire({
            icon: 'warning',
            title:this.translate.instant('pf.warning'),
            confirmButtonText:  this.translate.instant('pf.ok'),
            buttonsStyling: false,
            customClass: {
                confirmButton: 'btn btn-dark'
            },
            text:this.translate.instant('pf.access.denied'),
        })
    }
  authoritiesValid(auth: string): boolean {
    const account = JSON.parse(localStorage.getItem('account'));
    const authValue = account.authorities.includes(auth);
    if (!authValue) {
      this.pfSwallMessage();
      return false;
    }
      return true;
  }
    reverseTransaction(detail: PfTransactionsHistoryBaseResponse) {
      if (!this.authoritiesValid('MP_TRANSACTION_REVERSE')) {
        return;
      }
        /*if (!this.appConfig.isApiAllowed(this.userService.pfTransactionReverseUrl)) {
            this.pfSwallMessage();
            return
        }*/
        this.detailOrderNo = detail.orderId;
        this.detailOrderDate = detail.orderDate;
        this.detailOrderTime = detail.orderTime;
        this.detailNetOrderAmount = detail.netOrderAmount;
        this.detailCurrency = detail.currency;
        Swal.fire({
            cancelButtonText: this.translate.instant('pf.give.up'),
            confirmButtonText: this.translate.instant('pf.approved'),
            buttonsStyling:false,
            customClass: {
                confirmButton:'btn btn-dark mr-sm-2',
                cancelButton:'btn btn-secondary mr-sm-2',
            },
            reverseButtons:true,
            showCancelButton:true,
            width: 600,
            html:
                '<div class="modal-header" style="padding:1rem 0;">' +
                '<h4 class="modal-title">'+this.translate.instant('pf.transaction.reverse.popup.header')+'</h4>' +
                '</div><br><p class="text-justify">'+this.translate.instant('pf.transaction.reverse.popup.detail')+'</p><br>' +
                '<div class="container">' +
                '<div class="row"><p class="text-justify" style="margin-right: 1rem;">'+this.translate.instant('pf.lower.order.number')+': </p> <p class="col-right">' + this.detailOrderNo + '</p></div>' +
                '<div class="row"> <p class="text-justify"style="margin-right: 51px;">'+this.translate.instant('pf.order.date')+': </p> <p class="col-right">' + this.detailOrderDate + ' ' + this.detailOrderTime + '</p></div>' +
                '<div class="row"><p class="text-justify" style="margin-right: 4rem;">'+this.translate.instant('pf.transaction.amount')+': </p> <p class="col-right">' + this.detailNetOrderAmount.toLocaleString('tr-TR', {minimumFractionDigits: 2}) + ' ' + this.detailCurrency + '</p></div>' +
                '</div>',
            preConfirm: () => {
                this.userService.pfTransactionReverse(
                    new PfTransactionReverse(this.selectedMerchant.merchantId,
                        detail.productMerchantCode,
                        detail.msisdn,
                        String(detail.referenceNumber),
                        detail.orderAmount,
                        detail.netOrderAmount,
                        detail.netOrderAmount,
                        detail.currency)).subscribe(
                            (res) => {
                                if (res.status == 200) {
                                    this.onPfHistoryLast(this.startDate, this.endDate, 1, null);
                                    Swal.fire({
                                        icon: 'success',
                                        title: this.translate.instant('pf.transaction.completed'),
                                        confirmButtonText:  this.translate.instant('pf.ok'),
                                        buttonsStyling: false,
                                        customClass: {
                                            confirmButton: 'btn btn-dark'
                                        },
                                        text: res.body.responseDescription,
                                    })
                                }

                                if (res.status === 403 || res.status === 401) {
                                        this.pfSwallMessage();
                                }

                            },
                            (err) => {
                              if (err instanceof HttpErrorResponse) {
                                if (err.status === 403) {
                                  this.isPermission = false;
                                  this.message = ReturnLocalizedMessage(err);
                                  this.cdr.detectChanges();
                                } else {
                                  Swal.fire({
                                    icon: 'error',
                                    title: this.translate.instant('pf.transaction.not.completed'),
                                    confirmButtonText: this.translate.instant('pf.ok'),
                                    buttonsStyling: false,
                                    customClass: {
                                      confirmButton: 'btn btn-dark'
                                    },
                                    text: ReturnLocalizedMessage(err)
                                  })
                                }
                              }
                            }
                        );
            },
        })
    }


    refundTransaction(detail: PfTransactionsHistoryBaseResponse) {
        /*if (!this.appConfig.isApiAllowed(this.userService.pfTransactionRefundUrl)) {
            this.pfSwallMessage();
            return
        }*/
      if (!this.authoritiesValid('MP_TRANSACTION_REFUND')) {
        return;
      }
        this.detailOrderNo = detail.orderId;
        this.detailOrderDate = detail.orderDate;
        this.detailOrderTime = detail.orderTime;
        this.detailNetOrderAmount = detail.netOrderAmount;
        this.detailCurrency = detail.currency;
        Swal.fire({
            cancelButtonText:this.translate.instant('pf.give.up'),
            confirmButtonText:this.translate.instant('pf.continue'),
            buttonsStyling: false,
            customClass: {
                confirmButton: 'btn btn-dark mr-sm-2',
                cancelButton: 'btn btn-secondary mr-sm-2',
            },
            reverseButtons: true,
            showCancelButton: true,
            width: 600,
            html:
                '<div class="modal-header" style="padding:1rem 0;">' +
                '<h4 class="modal-title">'+this.translate.instant('pf.transaction.refund.popup.header')+'</h4>' +
                '</div><br><p class="text-justify">'+this.translate.instant('pf.transaction.refund.popup.detail1')+'</p><br>' +
                '<div class="container">' +
                '<div class="row"><p class="text-justify" style="margin-right: 1rem;">'+this.translate.instant('pf.lower.order.number')+': </p> <p class="col-right">' + this.detailOrderNo + '</p></div>' +
                '<div class="row"> <p class="text-justify"style="margin-right: 51px;">'+this.translate.instant('pf.order.date')+': </p> <p class="col-right">' + this.detailOrderDate + ' ' + this.detailOrderTime + '</p></div>' +
                '<div class="row"><p class="text-justify" style="margin-right: 4rem;">'+this.translate.instant('pf.transaction.amount')+': </p> <p class="col-right">' + this.detailNetOrderAmount.toLocaleString('tr-TR', {minimumFractionDigits: 2}) + ' ' + this.detailCurrency + '</p></div>' +
                '<div class="row"><p class="text-justify">'+this.translate.instant('pf.refund.amount')+': </p><input type="text" id="refund" class="form-control" style="width: 30%;height: calc(12px + 0.75rem + 3px);margin-left: 70px" placeholder="0,00 TL"></div>' +
                '</div>',
            preConfirm: () => {
                const refund = Swal.getPopup().querySelector('#refund') as HTMLInputElement;
                this.refundAmount = parseFloat(refund.value.replace(',', '.'));
                if (refund.value == "") {
                    Swal.showValidationMessage(this.translate.instant('pf.not.refund.amount'))
                    return
                }
                if (this.refundAmount > this.detailNetOrderAmount) {
                    Swal.showValidationMessage(this.translate.instant('pf.cannot.greater.than.transaction.net.amount'))
                    return
                } else {
                    Swal.fire({
                        cancelButtonText: this.translate.instant('pf.give.up'),
                        confirmButtonText: this.translate.instant('pf.continue'),
                        buttonsStyling: false,
                        customClass: {
                            confirmButton: 'btn btn-dark mr-sm-2',
                            cancelButton: 'btn btn-secondary mr-sm-2',
                        },
                        reverseButtons: true,
                        showCancelButton: true,
                        width: 600,
                        html:
                            '<div class="modal-header" style="padding:1rem 0;">' +
                            '<h4 class="modal-title">'+this.translate.instant('pf.transaction.refund.popup.header')+'</h4>' +
                            '</div><br><p class="text-justify">'+this.translate.instant('pf.transaction.refund.popup.detail2')+'</p><br>' +
                            '<div class="container">' +
                            '<div class="row"><p class="text-justify" style="margin-right: 1rem;">'+this.translate.instant('pf.lower.order.number')+': </p> <p class="col-right">' + this.detailOrderNo + '</p></div>' +
                            '<div class="row"> <p class="text-justify"style="margin-right: 51px;">'+this.translate.instant('pf.order.date')+':</p> <p class="col-right">' + this.detailOrderDate + ' ' + this.detailOrderTime + '</p></div>' +
                            '<div class="row"><p class="text-justify" style="margin-right: 58px;">'+this.translate.instant('pf.transaction.amount')+':</p> <p class="col-right">' + this.detailNetOrderAmount.toLocaleString('tr-TR', {minimumFractionDigits: 2}) + ' ' + this.detailCurrency + '</p></div>' +
                            '<div class="row"><p class="text-justify" style="margin-right: 68px;">'+this.translate.instant('pf.refund.amount')+':  </p> <p class="col-right">' + this.refundAmount.toLocaleString('tr-TR', {minimumFractionDigits: 2}) + ' ' + this.detailCurrency + '</p></div>' +

                            '</div>',
                        preConfirm: () => {
                            this.userService.pfTransactionRefund(
                                new PfTransactionRefund(this.selectedMerchant.merchantId,
                                    detail.productMerchantCode,
                                    detail.msisdn,
                                    String(detail.referenceNumber),
                                    detail.orderAmount,
                                    detail.netOrderAmount,
                                    this.refundAmount,
                                    detail.currency)).subscribe(
                                        (res) => {
                                            if (res.status == 200) {
                                                this.onPfHistoryLast(this.startDate, this.endDate, 1, null);
                                                Swal.fire({
                                                    icon: 'success',
                                                    title: this.translate.instant('pf.transaction.completed'),
                                                    confirmButtonText:  this.translate.instant('pf.ok'),
                                                    buttonsStyling: false,
                                                    customClass: {
                                                        confirmButton: 'btn btn-dark'
                                                    },
                                                    text: res.body.responseDescription,
                                                })
                                            }

                                            if (res.status === 403 || res.status === 401) {
                                                   this.pfSwallMessage();
                                            }
                                        },
                                        (err) => {
                                          if (err instanceof HttpErrorResponse) {
                                            if (err.status === 403) {
                                              this.isPermission = false;
                                              this.message = ReturnLocalizedMessage(err);
                                              this.cdr.detectChanges();
                                            } else {
                                              Swal.fire({
                                                icon: 'error',
                                                title: this.translate.instant('pf.transaction.not.completed'),
                                                confirmButtonText:  this.translate.instant('pf.ok'),
                                                buttonsStyling: false,
                                                customClass: {
                                                  confirmButton: 'btn btn-dark'
                                                },
                                                text: ReturnLocalizedMessage(err)
                                              })
                                            }
                                          }
                                        }
                                    );
                        }
                    })
                }
            }
        })

    }


    openTransactionDetailModal(open: boolean): void {
        this.isOpen = open;
    }

    transactionDetail(detail: PfTransactionsHistoryBaseResponse) {
        this.detailOrderNo = detail.orderId;
        this.detailOrderDate = detail.orderDate;
        this.detailOrderTime = detail.orderTime;
        this.detailOrderAmount = detail.orderAmount;
        this.detailNetOrderAmount = detail.netOrderAmount;

        if (detail.orderType == "SALE") {
            this.detailOrderType = this.translate.instant('pf.sale')
        }
        if (detail.orderType == 'REVERSE') {
            this.detailOrderType = this.translate.instant('pf.reverse')
        }
        if (detail.orderType == 'REFUND') {
            this.detailOrderType = this.translate.instant('pf.refund')
        }
        if (detail.orderType == 'PREAUTH') {
            this.detailOrderType =  this.translate.instant('pf.preauth')
        }
        if (detail.orderType == 'PREAUTH_REVERSE') {
            this.detailOrderType =this.translate.instant('pf.preauth.reverse')
        }
        if (detail.orderType == 'POSTAUTH') {
            this.detailOrderType = this.translate.instant('pf.postauth')
        }
        if (detail.orderType == 'POSTAUTH_REVERSE') {
            this.detailOrderType = this.translate.instant('pf.postauth.reverse')
        }
        if (detail.orderStatus == "SUCCESS") {
            this.detailOrderStatus = this.translate.instant('pf.success');
        }
        if (detail.orderStatus == 'FAIL') {
            this.detailOrderStatus = this.translate.instant('pf.fail');
        }
        if (detail.orderStatus == 'UNKNOWN') {
            this.detailOrderStatus = this.translate.instant('pf.processing');
        }
        if (detail.installmentType === 'NON_INSTALLMENT') {
          this.modalInstallmentType = this.translate.instant('pf.non.installment');
        }
        if (detail.installmentType === 'WITH_INSTALLMENT') {
          this.modalInstallmentType = this.translate.instant('pf.with.installment');
        }
        this.detailInstallmentCount = detail.installmentCount;
        this.bankResponseCode = detail.bankResponseCode;
        this.bankResponseCodeDesc = detail.bankResponseCodeDesc;
        this.detailCurrency = detail.currency;
        this.detailReferenceNumber = detail.referenceNumber;
        this.detailAcquirerBankDesc = detail.acquirerBankDesc;
        this.detailPaymentMethodType = detail.paymentMethodType;
        this.detailIssuerBankCodeDesc = detail.issuerBankCodeDesc;
        this.detailReconciliationDate = detail.reconciliationDate;
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

            if ((this.merchantFilters == null || this.merchantFilters.length < 1)
                && this.selectedMasterMerchant) {
                this.selectedMerchant = this.selectedMasterMerchant;
            }

            if (this.merchantFilters && this.merchantFilters.length > 0) {
                if (this.merchantFilters.length == 1 && !this.merchantFilters[0].hasSub) {
                    this.selectedMerchant = this.merchantFilters[0];
                }
                if (this.selectedMasterMerchant) {
                    this.selectedMerchant = this.selectedMasterMerchant;
                }
            }

            if (this.ll1Merchants && this.ll1Merchants.length > 0) {
                if (this.selectedLl1Merchant) {
                    this.selectedMerchant = this.selectedLl1Merchant;
                }
            }

            if (this.ll2Merchants && this.ll2Merchants.length > 0) {
                if (this.selectedLl2Merchant) {
                    this.selectedMerchant = this.selectedLl2Merchant;
                }
            }
          if (this.ll3Merchants && this.ll3Merchants.length > 0) {
            if (this.selectedLl3Merchant) {
              this.selectedMerchant = this.selectedLl3Merchant;
            }
          }

            if (!this.selectedMerchant) {
                this.firmError = true;
                this.messageService.addError(this.translate.instant('pf.choose.merchant'));
                return;
            }
            else {
                this.messageService.remove();
            }
        }
        this.isFirmModalOpen = open;
    }

    selectedMerchant: Merchant;
    merchantFilters: Merchant[];
    selectedMasterMerchant: Merchant;
    ll1Merchants: Merchant[];
    selectedLl1Merchant: Merchant;
    ll2Merchants: Merchant[];
    selectedLl2Merchant: Merchant;
    ll3Merchants: Merchant[];
    selectedLl3Merchant: Merchant;

    getMerchantFilter() {
      const merchant = JSON.parse(localStorage.getItem('merchantName'));
      if (merchant) {
        this.merchantFilters = [];
        this.merchantFilters.push(merchant);
      }
      /*  this.merchantService
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
        this.getChildMerchants(this.selectedMasterMerchant.merchantId, 'll1');
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

