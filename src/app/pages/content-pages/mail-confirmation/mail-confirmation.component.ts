import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from '../../../services/user.service';
import { MessageService } from '../../../shared/services/message.service';
import { ReturnLocalizedMessage } from '../../../util/return-localizedMessage';

@Component({
  selector: 'app-mail-confirmation',
  templateUrl: './mail-confirmation.component.html',
  styleUrls: ['./mail-confirmation.component.scss']
})
export class MailConfirmationComponent implements OnInit {
  code: string;
  alertMessage: string;
  alertMessageContinue: string;
  messageStatus: boolean;
  errorMessage: string;
  isExpired: boolean;
  isLinkSent: boolean;

  constructor(private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private userService: UserService,
    private cdr: ChangeDetectorRef,
    private messageService: MessageService,
    private router: Router) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.code = params['token'];
    });
  }

  ngOnInit(): void {
    this.mailConfirmation();
  }

  goToHomePageWithTimeout() {
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 3000);
  }

  mailConfirmation(): void {
    if (this.code) {
      this.userService.mailValidation(this.code).subscribe(res => {
        this.messageStatus = res.status;
        this.checkExpired(res.mailValidationHeader.responseCode);
        this.cdr.detectChanges();
      }, (err) => {
        this.messageStatus = null;
        this.cdr.detectChanges();
        if (err.error.localizedMessage) {
          this.errorMessage = ReturnLocalizedMessage(err);
        }
        this.messageService.addHttpError({
          httpErrorResponse: err,
          defaultMessage: 'mail-confirmation.message.error'
        });
      });
    } else {
      this.messageStatus = null;
      this.cdr.detectChanges();
      this.errorMessage = 'mail-confirmation.message.notCode';
    }
  }

  checkExpired(responseCode: string) {
    if (responseCode === "-2") this.isExpired = true;
    else this.goToHomePageWithTimeout();
  }

  retryMailValidation() {
    this.userService.retryMailValidation(this.code).subscribe(res => {
      this.isLinkSent = true;
      this.cdr.detectChanges();
      this.goToHomePageWithTimeout();
    }, err => {
      this.messageService.addHttpError({
        httpErrorResponse: err,
        defaultMessage: 'mail-confirmation.message.error'
      });
    })
  }

}
