import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LANGUAGES, LANGUAGE_META } from 'app/app.constants';
import { AccountService } from "../../auth/account.service";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"]
})
export class TableComponent {
  // user: User;

  constructor(public translate: TranslateService,
              private accountService: AccountService) {
    // user = user servisi çağır
  }

  getUsername(): string {
    return "Can Aslaner";
  }

  getMerchant(): string {
    return "Paycell";
  }

  getAvatar(): string {
    return "assets/img/portrait/small/avatar-s-1.png";
  }
}
