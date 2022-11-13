import {
  Component, OnInit, ViewChild, OnDestroy,
  ElementRef, AfterViewInit, ChangeDetectorRef, HostListener
} from "@angular/core";
import { RouteInfo } from './vertical-menu.metadata';
import { ROUTES } from './vertical-menu-routes.config';

import { Router } from "@angular/router";
import { TranslateService } from '@ngx-translate/core';
import { customAnimations } from "../animations/custom-animations";
import { DeviceDetectorService } from 'ngx-device-detector';
import { ConfigService } from '../services/config.service';
import { Subscription } from 'rxjs';
import { LayoutService } from '../services/layout.service';
import { AppConfig } from "../app-config/app-config";
import { Account } from "app/models/account.model";

@Component({
  selector: "app-sidebar",
  templateUrl: "./vertical-menu.component.html",
  animations: customAnimations
})
export class VerticalMenuComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('toggleIcon') toggleIcon: ElementRef;
  public menuItems: RouteInfo[] = [];
  level: number = 0;
  logoUrl = 'assets/img/logo.png';
  public config: any = {};
  protected innerWidth: any;
  layoutSub: Subscription;
  configSub: Subscription;
  perfectScrollbarEnable = true;
  collapseSidebar = false;
  resizeTimeout;
  customerType = [];
  isMpMerchant: boolean;
  isPayWithLinkActive = false;

  constructor(
    private router: Router,
    public translate: TranslateService,
    private layoutService: LayoutService,
    private configService: ConfigService,
    private cdr: ChangeDetectorRef,
    private deviceService: DeviceDetectorService,
    private appConfig: AppConfig
  ) {
    const account = JSON.parse(localStorage.getItem('account')) as Account;
    this.isPayWithLinkActive = account.isPayWithLinkActive;
    this.customerType = [];
    if (account.customerType === '1') {
      this.customerType = [1, 2];
    } else if (account.customerType === '2') {
      this.customerType = [2];
    } else {
      this.customerType = [1, 2];
    }
    this.isMpMerchant = account.isMpMerchant;
    this.config = this.configService.templateConf;
    this.innerWidth = window.innerWidth;
    this.isTouchDevice();
  }


  ngOnInit() {
    for (let i = 0; i < ROUTES.length; i++) {
      const menuItem = Object.assign({}, ROUTES[i]);
      if (menuItem.securityCheck && this.isRendered(menuItem) && this.checkPayWithLink(menuItem) && this.checkMpMerchant(menuItem)) {
        menuItem.submenu = this.getSubMenu(menuItem);
        this.menuItems.push(menuItem);
      } else if (this.checkPayWithLink(menuItem)) {
        menuItem.submenu = this.getSubMenu(menuItem);
        this.menuItems.push(menuItem);
      }
    }
  }

  getSubMenu(menuItem : RouteInfo) {
    const subMenu : RouteInfo[] = [];
    for (let i = 0; i < menuItem.submenu.length; i++) {
      if(this.checkMpMerchant(menuItem.submenu[i]))
        subMenu.push(menuItem.submenu[i])
    }
    return subMenu;
  }

  isRendered(info: RouteInfo) {
    for (let j = 0; j < info.allowedEndpoints.length; j++) {
      if (this.appConfig.allowedEndpoints.indexOf(info.allowedEndpoints[j]) > -1) {
        return true;
      }
    }
    return false;
  }

  checkPayWithLink(routeItem: RouteInfo): boolean {
    if (routeItem.isPayWithLinkActive)
      return routeItem.isPayWithLinkActive === this.isPayWithLinkActive;
    return true;
  }

  checkMpMerchant(routeItem: RouteInfo): boolean {
    return routeItem.isMpMerchant == null || routeItem.isMpMerchant === this.isMpMerchant;
  }

  ngAfterViewInit() {

    this.configSub = this.configService.templateConf$.subscribe((templateConf) => {
      if (templateConf) {
        this.config = templateConf;
      }
      this.loadLayout();
      this.cdr.markForCheck();

    });

    this.layoutSub = this.layoutService.overlaySidebarToggle$.subscribe(
      collapse => {
        if (this.config.layout.menuPosition === "Side") {
          this.collapseSidebar = collapse;
        }
      });

  }


  @HostListener('window:resize', ['$event'])
  onWindowResize(event) {
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
    this.resizeTimeout = setTimeout((() => {
      this.innerWidth = event.target.innerWidth;
      this.loadLayout();
    }).bind(this), 500);
  }

  loadLayout() {

    if (this.config.layout.menuPosition === "Top") { // Horizontal Menu
      if (this.innerWidth < 1200) { // Screen size < 1200
        this.menuItems = this.menuItems;
      }
    }
    else if (this.config.layout.menuPosition === "Side") { // Vertical Menu{
      this.menuItems = this.menuItems;
    }

    if (this.config.layout.sidebar.backgroundColor === 'white') {
      this.logoUrl = 'assets/img/logo-dark.png';
    }
    else {
      this.logoUrl = 'assets/img/logo.png';
    }

    if (this.config.layout.sidebar.collapsed) {
      this.collapseSidebar = true;
    }
    else {
      this.collapseSidebar = false;
    }
  }

  toggleSidebar() {
    let conf = this.config;
    conf.layout.sidebar.collapsed = !this.config.layout.sidebar.collapsed;
    this.configService.applyTemplateConfigChange({ layout: conf.layout });

    setTimeout(() => {
      this.fireRefreshEventOnWindow();
    }, 300);
  }

  fireRefreshEventOnWindow = function () {
    const evt = document.createEvent("HTMLEvents");
    evt.initEvent("resize", true, false);
    window.dispatchEvent(evt);
  };

  CloseSidebar() {
    this.layoutService.toggleSidebarSmallScreen(false);
  }

  isTouchDevice() {

    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();

    if (isMobile || isTablet) {
      this.perfectScrollbarEnable = false;
    }
    else {
      this.perfectScrollbarEnable = true;
    }

  }


  ngOnDestroy() {
    if (this.layoutSub) {
      this.layoutSub.unsubscribe();
    }
    if (this.configSub) {
      this.configSub.unsubscribe();
    }

  }

}
