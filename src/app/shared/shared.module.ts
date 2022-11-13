import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OverlayModule} from '@angular/cdk/overlay';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';


import {NgbDatepickerModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateModule} from '@ngx-translate/core';
import {PerfectScrollbarModule} from "ngx-perfect-scrollbar";
import {ClickOutsideModule} from 'ng-click-outside';
import {PipeModule} from 'app/shared/pipes/pipe.module';

//COMPONENTS
import {FooterComponent} from "./footer/footer.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {VerticalMenuComponent} from "./vertical-menu/vertical-menu.component";
import {CustomizerComponent} from './customizer/customizer.component';

//DIRECTIVES
import {ToggleFullscreenDirective} from "./directives/toggle-fullscreen.directive";
import {SidebarLinkDirective} from './directives/sidebar-link.directive';
import {SidebarDropdownDirective} from './directives/sidebar-dropdown.directive';
import {SidebarAnchorToggleDirective} from './directives/sidebar-anchor-toggle.directive';
import {SidebarDirective} from './directives/sidebar.directive';
import {TopMenuDirective} from './directives/topmenu.directive';
import {TopMenuLinkDirective} from './directives/topmenu-link.directive';
import {TopMenuDropdownDirective} from './directives/topmenu-dropdown.directive';
import {TopMenuAnchorToggleDirective} from './directives/topmenu-anchor-toggle.directive';
import {NgxWebstorageModule} from "ngx-webstorage";
import {LangSelectorComponent} from "./components/lang-selector/lang-selector.component";
import {NavUserMenuComponent} from "./components/nav-user-menu/nav-user-menu.component";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthHeaderInterceptor} from "./interceptors/auth-header.interceptor";
import {ArchwizardModule} from "angular-archwizard";
import {AlertErrorComponent} from "./components/alert/alert-error.component";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {NgApexchartsModule} from "ng-apexcharts";
import {ChartistModule} from "ng-chartist";
import {AuthExpiredInterceptor} from "./interceptors/auth-expired.interceptor";
import {NgSelectModule} from "@ng-select/ng-select";

@NgModule({
  exports: [
    CommonModule,
    FooterComponent,
    NavbarComponent,
    VerticalMenuComponent,
    CustomizerComponent,
    ToggleFullscreenDirective,
    SidebarDirective,
    TopMenuDirective,
    NgbModule,
    TranslateModule,
    LangSelectorComponent,
    ArchwizardModule,
    NgxDatatableModule,
    NgApexchartsModule,
    AlertErrorComponent,
    ChartistModule,
    NgSelectModule,
    NgbDatepickerModule,
    MatTabsModule,
    MatStepperModule,

  ],
  imports: [
    RouterModule,
    CommonModule,
    NgbModule,
    TranslateModule,
    FormsModule,
    OverlayModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    ClickOutsideModule,
    PipeModule,
    NgxWebstorageModule.forRoot({prefix: 'app', separator: '-'}),
    NgSelectModule,
    NgbDatepickerModule,
    MatTabsModule,
    MatStepperModule,
    NgbModalModule,

  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    VerticalMenuComponent,
    CustomizerComponent,
    ToggleFullscreenDirective,
    SidebarLinkDirective,
    SidebarDropdownDirective,
    SidebarAnchorToggleDirective,
    SidebarDirective,
    TopMenuLinkDirective,
    TopMenuDropdownDirective,
    TopMenuAnchorToggleDirective,
    TopMenuDirective,
    LangSelectorComponent,
    NavUserMenuComponent,
    AlertErrorComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHeaderInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthExpiredInterceptor,
      multi: true,
    },
  ]
})
export class SharedModule {
}
