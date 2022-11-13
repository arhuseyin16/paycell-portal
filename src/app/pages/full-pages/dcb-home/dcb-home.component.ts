import {ChangeDetectorRef, Component} from '@angular/core';
import {UserService} from "../../../services/user.service";
import * as moment from 'moment';
import {DatePipe} from '@angular/common';
import {HttpErrorResponse} from "@angular/common/http";
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexGrid,
  ApexLegend,
  ApexMarkers,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexResponsive,
  ApexStroke,
  ApexTheme,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis
} from "ng-apexcharts";
import * as Chartist from 'chartist';
import {ChartEvent, ChartType} from "ng-chartist";
import {AccountService} from "../../../shared/auth/account.service";
import {MerchantService} from "../../../services/merchant.service";
import {Merchant} from "../../../models/merchant";
import {MessageService} from "../../../shared/services/message.service";
import {TranslateService} from "@ngx-translate/core";
import {DcbMain} from "../../../models/response/dcb-transaction-summary/dcb.main";
import {DcbTransactionsSummary} from "../../../models/request/dcb.transactions.summary";
import {Error} from "../../../models/response/error";
import Swal from "sweetalert2";
import {MerchantId} from "../../../models/request/merchant.id";
import {ReturnLocalizedMessage} from '../../../util/return-localizedMessage';
import {MerchantLevelModel} from '../../../models/request/merchant-level-model';

export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}


export type ChartOptions = {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  colors: string[],
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[],
  title: ApexTitleSubtitle;
  dataLabels: ApexDataLabels,
  stroke: ApexStroke,
  grid: ApexGrid,
  legend?: ApexLegend,
  tooltip?: ApexTooltip,
  plotOptions?: ApexPlotOptions,
  labels?: string[],
  fill: ApexFill,
  markers?: ApexMarkers,
  theme: ApexTheme,
  responsive: ApexResponsive[]
};

var $info = "#2F8BE6",
  $info_light = "#ACE0FC"
var themeColors = [$info, $info_light];

@Component({
  selector: 'app-dcb-home',
  templateUrl: './dcb-home.component.html',
  styleUrls: ['./dcb-home.component.scss']
})
export class DcbHomeComponent {

  pfTransactions: DcbMain

  successTotalCount = 0;
  successTotalAmount = 0;
  reverseTotalCount = 0;
  reverseTotalAmount = 0;

  successSaleByCount: number[] = [];
  successSaleByDate: string [] = [];
  successSaleByAmount: number[] = [];
  reverseSaleCount: number[] = [];
  reverseSaleCountByDate: string [] = [];
  failSaleCountLast: number[] = [];
  failSaleCountByDateLast: string [] = [];
  successSaleByAmountDate: string [] = [];
  reverseSaleAmount: number[] = [];
  reverseCountByDate: string [] = [];
  reverseCountLast: number[] = [];
  reverseCountByDateLast: string [] = [];
  isOpen: boolean = false;
  currentDate: Date = new Date();
  merchantId: string;
  current: any;
  past: any;
  startD: Date;
  endD: Date;
  submitted: boolean = false;
  isPermission: boolean = false;
  maxDate: any;
  DcbTransSummary: DcbTransactionsSummary;
  chartData = false;
  isSuccessSaleCountNoData: boolean = false;
  isSuccessSaleAmountNoData: boolean = false;
  isFailSaleCountNoData: boolean = false;
  isReverseRefundSaleCountNoData: boolean = false;
//********************************
  columnChartOptions: Partial<ChartOptions>;
  columnChartOptions2: Partial<ChartOptions>;
  columnChartOptions3: Partial<ChartOptions>;
  columnChartOptions4: Partial<ChartOptions>;
  error:Error;
  localizedMessage:string;
  storageMerchantName: string;
  startDateValue: any;
  endDateValue: any;
  message: string;
  merchantIds: Array<MerchantLevelModel> = new Array<MerchantLevelModel>();

  constructor(private userService: UserService,
              private cdr: ChangeDetectorRef,
              private accountService: AccountService,
              private merchantService: MerchantService,
              private messageService: MessageService,
              public translate: TranslateService
  ) {
    const merchant = JSON.parse(localStorage.getItem('merchantName'));
    this.storageMerchantName = merchant ? merchant.merchantName : null;
    this.columnChartOptions = {
      chart: {
        height: 350,
        type: 'bar',
        toolbar: {
          show: false
        },
        animations: {
          enabled: false
        }
      },
      colors: themeColors,
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '25%',
        },
      },
      grid: {
        borderColor: "#BDBDBD44"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      series: [{
        name: this.translate.instant('home-page.count'),
        data: this.successSaleByCount
      }],
      legend: {
        show: false
      },
      xaxis: {
        categories: this.successSaleByDate,
        axisBorder: {
          color: "#BDBDBD44"
        }
      },
      yaxis: {
        forceNiceScale: true,
        decimalsInFloat: 0
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + ""
          }
        }
      }
    },
      this.columnChartOptions2 = {
        chart: {
          height: 350,
          type: 'bar',
          toolbar: {
            show: false
          },
          animations: {
            enabled: false
          }
        },
        colors: themeColors,
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '25%',
          },
        },
        grid: {
          borderColor: "#BDBDBD44"
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        series: [{
          name: this.translate.instant('home-page.total.amount'),
          data: this.successSaleByAmount
        }],
        legend: {
          show: false
        },
        xaxis: {
          categories: this.successSaleByAmountDate,
          axisBorder: {
            color: "#BDBDBD44"
          }
        },
        yaxis: {
          forceNiceScale: true,
          decimalsInFloat: 2
        },
        tooltip: {
          y: {
            formatter: function formatMyMoney(price) {
              let currency_symbol = "₺"
              let formattedOutput = new Intl.NumberFormat('tr-TR', {
                style: 'currency',
                currency: 'TRY',
                minimumFractionDigits: 2,
              });
              return formattedOutput.format(price).replace(currency_symbol, '')
            }
          }
        }
      },
      this.columnChartOptions3 = {
        chart: {
          height: 350,
          type: 'bar',
          toolbar: {
            show: false
          },
          animations: {
            enabled: false
          }
        },
        colors: themeColors,
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '25%',
          },
        },
        grid: {
          borderColor: "#BDBDBD44"
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        series: [{
          name: this.translate.instant('home-page.count'),
          data: this.reverseSaleCount
        }],
        legend: {
          show: false
        },
        xaxis: {
          categories: this.reverseSaleCountByDate,
          axisBorder: {
            color: "#BDBDBD44"
          }
        },
        yaxis: {
          forceNiceScale: true,
          decimalsInFloat: 0
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + ""
            }
          }
        }
      },
      this.columnChartOptions4 = {
        chart: {
          height: 350,
          type: 'bar',
          toolbar: {
            show: false
          },
          animations: {
            enabled: false
          }
        },
        colors: themeColors,
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '25%',
          },
        },
        grid: {
          borderColor: "#BDBDBD44"
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        series: [{
          name: this.translate.instant('home-page.total.amount'),
          data: this.reverseSaleAmount
        }],
        legend: {
          show: false
        },
        xaxis: {
          categories: this.reverseCountByDate,
          axisBorder: {
            color: "#BDBDBD44"
          }
        },
        yaxis: {
          showForNullSeries: false,
          forceNiceScale: true,
          decimalsInFloat: 0
        },
        tooltip: {
          y: {
            formatter: function formatMyMoney(price) {
              let currency_symbol = "₺"
              let formattedOutput = new Intl.NumberFormat('tr-TR', {
                style: 'currency',
                currency: 'TRY',
                minimumFractionDigits: 2,
              });
              return formattedOutput.format(price).replace(currency_symbol, '')
            }
          }
        }
      }
  }

  ngOnInit(): void {
    this.past = moment(this.currentDate).subtract(7, 'day').format("YYYY-MM-DD");
    this.current = moment(this.currentDate).format("YYYY-MM-DD");
    this.onUserDcbTransactionsSummaryFirst(this.past, this.current)

  }

  dateDiff(startDate, endDate) {
    const start = new Date(startDate.year, startDate.month - 1, startDate.day, 0, 0, 0, 0);
    const end = new Date(endDate.year, endDate.month - 1, endDate.day, 0, 0, 0, 0);
    const timeDiff = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays;
  }

  dateDiffIsBig(startDate, endDate) {
    const start = new Date(startDate.year, startDate.month - 1, startDate.day, 0, 0, 0, 0);
    const end = new Date(endDate.year, endDate.month - 1, endDate.day, 0, 0, 0, 0);
    if (start.getTime() > end.getTime()) {
      return true
    } else {
      return false
    }

  }

  dateObjToDate(vDate) {
    const datepipe: DatePipe = new DatePipe('tr-EN')
    const cDate = new Date(vDate.year, vDate.month - 1, vDate.day, 0, 0, 0, 0);
    const sDate = datepipe.transform(cDate, 'yyy-MM-dd');
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

  isMainValidation(startDate, endDate) {
    if (startDate == null || endDate == null) {
      this.messageService.addError(this.translate.instant('home-page.startDate.and.EndDate.must'));
      return;
    } else {
      this.messageService.remove();
    }
    if (this.dateDiffIsBig(startDate, endDate)) {
      this.messageService.addError(this.translate.instant('home-page.startDate.cannot.greater.than.endDate'));
      return;
    } else {
      this.messageService.remove();
    }
    if (this.dateDiff(startDate, endDate) > 7) {
      this.messageService.addError(this.translate.instant('home-page.difference.between.startDate.and.endDate'));
      return;
    } else {
      this.messageService.remove();
      return true;
    }


  }

  firmFail = false;

  onUserDcbTransactionsSummary(startDate, endDate) {
    if (!this.isMainValidation(startDate, endDate)) {
      return
    }
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

    if (!this.selectedMerchant) {
      this.firmFail = true;
      this.messageService.addError(this.translate.instant('home-page.choose.company'));
      return;
    }

    this.firmFail = false;
    this.submitted = true;
    this.chartData = false;
    this.openModal(false);
    this.merchantIdsListRequest();

    this.DcbTransSummary = new DcbTransactionsSummary(
      this.dateObjToDate(startDate),
      this.dateObjToDate(endDate),
      this.merchantIds
    //  this.convertIdList(this.selectedMerchant)
    );
    this.userService.dcbTransactionsSummary(this.DcbTransSummary).subscribe(
      (res) => {
        if (res != null && res.body != null) {
          this.pfTransactions = res.body;
          this.TotalSummary()
          this.SuccessSaleCount()
          this.SuccessSaleAmount()
          this.ReverseSaleCount(false)
          this.ReverseSaleAmount(false)
          this.chartData = true;
          this.setMerchantName();
          this.startDateValue = startDate?.day + '.' + startDate?.month + '.' + startDate?.year;
          this.endDateValue = endDate?.day + '.' + endDate?.month + '.' + endDate?.year;
          this.cdr.detectChanges();
        }
      },
      async(err) => {
        this.storageMerchantName = null;
        this.startDateValue = null;
        this.endDateValue = null;
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

  merchantIdsListRequest() {
    this.merchantIds = [];
    this.merchantIds.push({
      l1: this.selectedMasterMerchant ? this.selectedMasterMerchant.merchantId : null,
      l2: this.selectedLl1Merchant ? this.selectedLl1Merchant.merchantId : null,
      l3: this.selectedLl2Merchant ? this.selectedLl2Merchant.merchantId : null,
      l4: this.selectedLl3Merchant ? this.selectedLl3Merchant.merchantId : null
    });
  }

  setMerchantName() {
    if (this.selectedLl3Merchant) {
      this.storageMerchantName = this.selectedLl3Merchant.merchantName;
    } else if (this.selectedLl2Merchant) {
      this.storageMerchantName = this.selectedLl2Merchant.merchantName;
    } else if (this.selectedLl1Merchant) {
      this.storageMerchantName = this.selectedLl1Merchant.merchantName;
    } else if (this.selectedMasterMerchant) {
      this.storageMerchantName = this.selectedMasterMerchant.merchantName;
    } else {
      const merchant = JSON.parse(localStorage.getItem('merchantName'));
      this.storageMerchantName = merchant ? merchant.merchantName : null;
    }
  }

  onUserDcbTransactionsSummaryFirst(startDate, endDate) {
    if (!this.isMainValidation(startDate, endDate)) {
      return
    }
    this.chartData = false;
    const merchant = JSON.parse(localStorage.getItem('merchantName'));
    const merchantIds = [];
    merchantIds.push({
      l1: merchant ? merchant.merchantId : null,
      l2: null,
      l3: null,
      l4: null
    });

    this.userService.dcbTransactionsSummary(new DcbTransactionsSummary(startDate, endDate, merchantIds))
    .subscribe(
      (res) => {
          this.isPermission = true;
        if(res != null && res.body != null) {
          this.pfTransactions = res.body;
          console.log(this.pfTransactions)
          this.TotalSummary()
          this.SuccessSaleCount()
          this.SuccessSaleAmount()
          this.ReverseSaleCount(true)
          this.ReverseSaleAmount(true)
          this.chartData = true;
          const startDateSplit = startDate.split('-');
          this.startDateValue = startDateSplit[2] + '.' + startDateSplit[1] + '.' + startDateSplit[0];
          const endDateSplit = endDate.split('-');
          this.endDateValue = endDateSplit[2] + '.' + endDateSplit[1] + '.' + endDateSplit[0];
          this.cdr.detectChanges();
        }
      },
      (err) => {
        this.startDateValue = null;
        this.endDateValue = null;
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
  }

  TotalSummary() {
    this.successTotalCount = 0;
    this.successTotalAmount = 0;
    this.reverseTotalCount = 0;
    this.reverseTotalAmount = 0;
    if (null != this.pfTransactions.totalSummary && this.pfTransactions.totalSummary.length > 0) {
      for (let i = 0; i < this.pfTransactions.totalSummary.length; i++) {
        if (this.pfTransactions.totalSummary[i].type == "SUCCESS") {
          this.successTotalCount = this.pfTransactions.totalSummary[i].totalCount
          this.successTotalAmount = this.pfTransactions.totalSummary[i].totalAmount
        } else if (this.pfTransactions.totalSummary[i].type == "REVERSE") {
          this.reverseTotalCount = this.pfTransactions.totalSummary[i].totalCount
          this.reverseTotalAmount = this.pfTransactions.totalSummary[i].totalAmount
        }
      }
    }
  }

  SuccessSaleCount() {
    this.clearArrayN(this.successSaleByCount);
    this.clearArrayS(this.successSaleByDate);
    if (null != this.pfTransactions.successSaleCount && this.pfTransactions.successSaleCount.length > 0) {
      this.isSuccessSaleCountNoData = false;
      for (let j = 0; j < this.pfTransactions.successSaleCount.length; j++) {
        this.successSaleByCount.push(this.pfTransactions.successSaleCount[j].totalCount)
        this.successSaleByDate.push(this.pfTransactions.successSaleCount[j].transactionDate)
      }
    } else {
      this.isSuccessSaleCountNoData = true;
    }
  }

  SuccessSaleAmount() {
    this.clearArrayN(this.successSaleByAmount);
    this.clearArrayS(this.successSaleByAmountDate);

    if (null != this.pfTransactions.successSaleAmount && this.pfTransactions.successSaleAmount.length > 0) {
      this.isSuccessSaleAmountNoData = false;
      for (let i = 0; i < this.pfTransactions.successSaleAmount.length; i++) {
        this.successSaleByAmount.push(this.pfTransactions.successSaleAmount[i].totalAmount)
        this.successSaleByAmountDate.push(this.pfTransactions.successSaleAmount[i].transactionDate)
      }

    } else {
      this.isSuccessSaleAmountNoData = true;
    }
  }

  ReverseSaleCount(isFirst) {
    this.clearArrayN(this.reverseSaleCount);
    this.clearArrayS(this.reverseSaleCountByDate);
    this.clearArrayN(this.failSaleCountLast);
    this.clearArrayS(this.failSaleCountByDateLast);
    if (null != this.pfTransactions.reverseSaleCount) {
      this.isFailSaleCountNoData = false;
      for (let j = 0; j < this.pfTransactions.reverseSaleCount.length; j++) {
        this.reverseSaleCount.push(this.pfTransactions.reverseSaleCount[j].totalCount)
        this.reverseSaleCountByDate.push(this.pfTransactions.reverseSaleCount[j].transactionDate)
      }

    }

    if (null != this.pfTransactions.reverseSaleCount && this.pfTransactions.reverseSaleCount.length < 1) {
      this.isFailSaleCountNoData = true;
      if (isFirst) {
        this.reverseSaleCount.push(0);
        this.reverseSaleCountByDate.push('');
      } else {
        this.failSaleCountLast.push(0);
        this.failSaleCountByDateLast.push('');
      }
    }
  }

  ReverseSaleAmount(isFirst) {
    this.clearArrayN(this.reverseSaleAmount);
    this.clearArrayS(this.reverseCountByDate);
    this.clearArrayN(this.reverseCountLast);
    this.clearArrayS(this.reverseCountByDateLast);

    if (null != this.pfTransactions.reverseSaleAmount && this.pfTransactions.reverseSaleAmount.length > 0) {
      this.isReverseRefundSaleCountNoData = false;
      for (let j = 0; j < this.pfTransactions.reverseSaleAmount.length; j++) {
        this.reverseSaleAmount.push(this.pfTransactions.reverseSaleAmount[j].totalAmount)
        this.reverseCountByDate.push(this.pfTransactions.reverseSaleAmount[j].transactionDate)
      }
    }
    if (null != this.pfTransactions.reverseSaleAmount && this.pfTransactions.reverseSaleAmount.length < 1) {
      this.isReverseRefundSaleCountNoData = true;
      if (isFirst) {
        this.reverseSaleAmount.push(0)
        this.reverseCountByDate.push('')
      } else {
        this.reverseCountLast.push(0);
        this.reverseCountByDateLast.push('');
      }
    }
  }

  clearArrayN(arr: number[]) {
    for (let j = 0; j < arr.length; j++) {
      arr.pop();
    }
    arr.length = 0;
  }

  clearArrayS(arr: string[]) {
    for (let j = 0; j < arr.length; j++) {
      arr.pop();
    }
    arr.length = 0;
  }

  openModal(open: boolean): void {
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
    }
    this.isOpen = open;
  }

  merchantFilters: Merchant[];
  selectedMasterMerchant: Merchant;
  ll1Merchants: Merchant[];
  selectedLl1Merchant: Merchant;
  ll2Merchants: Merchant[];
  selectedLl2Merchant: Merchant;
  ll3Merchants: Merchant[];
  selectedLl3Merchant: Merchant;
  selectedMerchant: Merchant[];

  getMerchantFilter() {
    const merchant = JSON.parse(localStorage.getItem('merchantName'));
    if (merchant) {
      this.merchantFilters = [];
      this.merchantFilters.push(merchant);
    }
   /* this.merchantService
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

  getModalHeight() {
    if (!(this.merchantFilters && this.merchantFilters.length > 0)) {
      return '400px';
    }

    if (!(this.ll1Merchants && this.ll1Merchants.length > 0)) {
      return '520px';
    }

    if (!(this.ll2Merchants && this.ll2Merchants.length > 0)) {
      return '600px';
    }

    return '630px';
  }
}
