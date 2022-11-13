import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {NgxSpinnerModule} from 'ngx-spinner';
import {NgModule, Inject, APP_INITIALIZER, LOCALE_ID} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localeTr from '@angular/common/locales/tr';
registerLocaleData(localeTr, 'tr');
import {
    PerfectScrollbarModule,
    PERFECT_SCROLLBAR_CONFIG,
    PerfectScrollbarConfigInterface
} from 'ngx-perfect-scrollbar';

import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {AppComponent} from './app.component';
import {ContentLayoutComponent} from './layouts/content/content-layout.component';
import {FullLayoutComponent} from './layouts/full/full-layout.component';

import {AuthService} from './shared/auth/auth.service';
import {AuthGuard} from './shared/auth/auth-guard.service';
import {AuthenticationAccessGuard} from './shared/auth/authentication-access-guard.service';
import {WINDOW_PROVIDERS} from './shared/services/window.service';
import {CustomTranslateHttpLoader} from './util/custom-translate-http-loader.util';
import {SessionService} from './shared/auth/session.service';
import {ToastrModule} from 'ngx-toastr';
import {MessageComponent} from './shared/components/message/message.component';
import {AppConfig, initConfig} from './shared/app-config/app-config';
import {LoaderService} from './shared/my-loader/loader.service';
import {LoaderInterceptor} from './shared/my-loader/loader-interceptor.service';
import {MyLoaderComponent} from './shared/components/my-loader/my-loader.component';
import {FormsModule} from '@angular/forms';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true,
    wheelPropagation: false
};

@NgModule({
    declarations: [AppComponent, FullLayoutComponent, ContentLayoutComponent, MessageComponent, MyLoaderComponent],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    NgbModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: CustomTranslateHttpLoader,
        deps: [HttpClient, AppConfig]
      }
    }),
    PerfectScrollbarModule,
    FormsModule
  ],
    providers: [
        LoaderService,
        {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true},
        AuthService,
        SessionService,
        AuthGuard,
        AuthenticationAccessGuard,
        AppConfig,
        {
            provide: APP_INITIALIZER,
            useFactory: initConfig,
            deps: [AppConfig],
            multi: true
        },
        {provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG},
        {provide: LOCALE_ID, useValue: 'tr-TR'},
        WINDOW_PROVIDERS
    ],

    bootstrap: [AppComponent]
})
export class AppModule {}
