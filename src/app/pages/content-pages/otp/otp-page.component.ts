import { ChangeDetectorRef, Component, OnDestroy, OnInit, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from 'app/shared/auth/auth.service';
import { NgxSpinnerService } from "ngx-spinner";
import { TranslateService } from "@ngx-translate/core";
import { HttpClient } from "@angular/common/http";
import { MessageService } from "../../../shared/services/message.service";

@Component({
  selector: 'app-otp-page',
  templateUrl: './otp-page.component.html',
  styleUrls: ['./otp-page.component.scss']
})
export class OtpPageComponent implements OnInit, OnDestroy {

  validateFormSubmitted = false;
  isValidationFailed = false;
  loadingText: string;

  isSentOtp = false;
  isSentOtpFailed = false;

  otpLength = 6;

  validateForm = new FormGroup({
    otp: new FormControl(null, [Validators.required, Validators.pattern(new RegExp(`^[0-9]{${this.otpLength}}$`))]),
  });

  interval;
  expireTimeLeft = 0;
  expireTotalTimeInSecs = 0;
  nextRequestTimeLeft = 0;
  nextRequestTotalTimeInSecs = 0;

  constructor(private router: Router, private http: HttpClient,
              private authService: AuthService,
              private spinner: NgxSpinnerService,
              public translate: TranslateService,
              private route: ActivatedRoute,
              private ref: ChangeDetectorRef,
              private messageService: MessageService) {
    this.authService
      .hasActiveOtp()
      .subscribe(
        (res) => {
          const sendOtp = res.body;

          this.expireTotalTimeInSecs = Math.floor((new Date(sendOtp.expireDate).getTime() - new Date().getTime()) / 1000);
          this.expireTimeLeft = this.expireTotalTimeInSecs;
          this.nextRequestTotalTimeInSecs = Math.floor((new Date(sendOtp.nextAvailableRequestDate).getTime() - new Date().getTime()) / 1000);
          this.nextRequestTimeLeft = this.nextRequestTotalTimeInSecs;

          let changed = false;
          this.interval = setInterval(() => {
            if (this.expireTimeLeft > 0) {
              this.expireTimeLeft--;
              changed = true;
            }

            if (this.nextRequestTimeLeft > 0) {
              this.nextRequestTimeLeft--;
              changed = true;
            }
            this.ref.detectChanges();
            if (!changed) {
              clearInterval(this.interval);
            }
          }, 1000);

          this.isSentOtp = true;
        },
        (err) => {
          this.sendOtp();
        }
      );
  }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  sendOtp(): void {
    this.loadingText = 'validate-otp.message.sendingOtp';
    this.showSpinner();
    this.authService
      .sendOtp()
      .subscribe(
        (res) => {
          const sendOtp = res.body;

          this.expireTotalTimeInSecs = Math.floor((new Date(sendOtp.expireDate).getTime() - new Date().getTime()) / 1000);
          this.expireTimeLeft = this.expireTotalTimeInSecs;
          this.nextRequestTotalTimeInSecs = Math.floor((new Date(sendOtp.nextAvailableRequestDate).getTime() - new Date().getTime()) / 1000);
          this.nextRequestTimeLeft = this.nextRequestTotalTimeInSecs;


          let changed = false;
          this.interval = setInterval(() => {
            if (this.expireTimeLeft > 0) {
              this.expireTimeLeft--;
              changed = true;
            }

            if (this.nextRequestTimeLeft > 0) {
              this.nextRequestTimeLeft--;
              changed = true;
            }
            this.ref.detectChanges();
            if (!changed) {
              clearInterval(this.interval);
            }
          }, 1000);

          this.isSentOtp = true;
          this.spinner.hide();
          this.loadingText = null;


//******************************************************************************************************
//           this.http
//             .get<string>(API_SERVER_URL + '/security/otpp', {observe: 'response'})
//             .subscribe((res) => this.validateForm.controls['otp'].setValue(res.body), null);
//******************************************************************************************************


        },
        (err) => {
          this.messageService.addHttpError({
            httpErrorResponse: err,
            defaultMessage: 'validate-otp.error.message'
          });

          this.isSentOtpFailed = true;
          this.spinner.hide();
          this.loadingText = null;
        }
      );
  }

  get lf() {
    return this.validateForm.controls;
  }

  // On submit button click
  onSubmit() {
    this.validateFormSubmitted = true;
    if (this.validateForm.invalid) {
      return;
    }

    this.showSpinner();

    this.authService
      .validateOtp(this.validateForm.value.otp)
      .subscribe(
        ({passExpired}) => {
          this.isValidationFailed = false;
          this.spinner.hide();

          if (passExpired) {
            this.router.navigate(['/pages/change-expired-password']);
          } else {
            this.router.navigate(['/pages/merchant']);
          }
        },
        (err) => {
          this.messageService.addHttpError({
            httpErrorResponse: err,
            defaultMessage: 'validate-otp.error.message'
          });

          this.isValidationFailed = true;
          this.spinner.hide();
        }
      );
  }

  showSpinner() {
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
  }
}
