import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MessageService} from '../../../shared/services/message.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-pay-with-link',
  templateUrl: './pay-with-link.component.html',
  styleUrls: ['./pay-with-link.component.scss']
})
export class PayWithLinkComponent implements OnInit {
  isPermission: boolean;
  message: string;

  constructor(private cdr: ChangeDetectorRef,
              private messageService: MessageService,
              public translate: TranslateService) { }

  ngOnInit(): void {
    this.authController();
  }

  authController() {
    const account = JSON.parse(localStorage.getItem('account'));
    this.isPermission = account.authorities.includes('PAY_WITH_LINK_AUTH');
    this.message = this.isPermission ? `Hoşgeldiniz ${account.email}` : 'error.access.denied.message';
    this.cdr.detectChanges();
  }

}
