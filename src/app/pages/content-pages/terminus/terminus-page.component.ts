import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { TranslateService } from "@ngx-translate/core";
import { AccountService } from "../../../shared/auth/account.service";
import { Router } from "@angular/router";
import {AppConfig} from "../../../shared/app-config/app-config";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-terminus-page',
  templateUrl: './terminus-page.component.html',
  styleUrls: ['./terminus-page.component.scss']
})

export class TerminusPageComponent implements OnInit {

  isProcessing = false;
  spinnerText: string;
  isFailed = false;
  errorMessage: string;

  constructor(private spinner: NgxSpinnerService,
              private router: Router,
              public translate: TranslateService,
              public accountService: AccountService,
              private appConfig: AppConfig,
              private userService: UserService) {
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.errorMessage = null;
    this.isFailed = false;
    this.isProcessing = true;
    this.showSpinner('terminus.spinner.text')

    this.accountService.identity(true)
      .subscribe(
        (account) => {
          localStorage.setItem('account', JSON.stringify(account));
          this.isProcessing = false;
          this.resetSpinner();

          if (account?.customerType && account?.customerType.toString() === '2') {
            this.router.navigate(['/pay-with-link']);
          } else if (account?.customerType && (account?.customerType.toString() === 'null'
            || account?.customerType.toString() === '1')) {
            this.router.navigate(['/pf-home']);
          } else if (account && (!this.appConfig.isApiAllowed(this.userService.pfTransactionsSummaryUrl))
            && (!this.appConfig.isApiAllowed(this.userService.dcbTransactionsSummaryUrl))) {
            this.router.navigate(['/pf-home']);
          } else if (account && (!this.appConfig.isApiAllowed(this.userService.pfTransactionsSummaryUrl))
            && (this.appConfig.isApiAllowed(this.userService.dcbTransactionsSummaryUrl))) {
            this.router.navigate(['/dcb-home']);
          } else if (account && this.accountService.isFullyAuthenticated() &&
            (this.appConfig.isApiAllowed(this.userService.pfTransactionsSummaryUrl))
            && (!this.appConfig.isApiAllowed(this.userService.dcbTransactionsSummaryUrl))) {
            this.router.navigate(['/pf-home']);
          } else if (account && this.accountService.isFullyAuthenticated() &&
            (this.appConfig.isApiAllowed(this.userService.pfTransactionsSummaryUrl))
            && (this.appConfig.isApiAllowed(this.userService.dcbTransactionsSummaryUrl))) {
            this.router.navigate(['/pf-home']);
          } else {
            this.isFailed = true;
            this.errorMessage = 'terminus.error.message';
          }
        },
        (err) => {
          this.isProcessing = false;
          this.resetSpinner();
          this.isFailed = true;
          this.errorMessage = err;
        }
      );
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
