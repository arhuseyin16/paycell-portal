import {Component} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AccountService } from "../../auth/account.service";
import { AuthService } from "../../auth/auth.service";
import {Router} from '@angular/router';

@Component({
  selector: "app-nav-user-menu",
  templateUrl: "./nav-user-menu.component.html",
  styleUrls: ["./nav-user-menu.component.scss"]
})
export class NavUserMenuComponent {
  // user: User;
  valueHidden = true;
  customerType = '1';

  constructor(public translate: TranslateService,
              private router: Router,
              private accountService: AccountService,
              private authService: AuthService) {
    if (localStorage.getItem('merchantLength')) {
      this.valueHidden = false;
    }
    const account = JSON.parse(localStorage.getItem('account'));
    this.customerType = account?.customerType ? account?.customerType : '1';
  }

  getUsername(): string {
    return this.accountService.getUserName();
  }

  getMerchant(): string {
    return this.accountService.getUserMerchant();
  }

  getAvatar(): string {
    /*const imageUrl = this.accountService.getImageUrl()
    return imageUrl ? imageUrl : "assets/img/portrait/small/user.png";*/
    const account = JSON.parse(localStorage.getItem('account'));
    return  account ? account.imageUrl : 'assets/img/portrait/small/user.png';
  }

  logout() {
    this.authService.logout()
  }

  userRouter(type: string) {
    localStorage.setItem('type', type);
    this.router.navigate(['/profile']);
  }

  dropDownMenu() {
    if (localStorage.getItem('merchantLength')) {
      this.valueHidden = false;
    } else {
      this.valueHidden = true;
    }
    this.getUsername();
    this.getMerchant();
    this.getAvatar();
  }
}
