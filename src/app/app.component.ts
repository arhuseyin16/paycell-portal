import {Component, ViewContainerRef, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {Router, NavigationEnd} from '@angular/router';
import {filter} from 'rxjs/operators';
import {TranslateService} from "@ngx-translate/core";
import {LANGUAGES, DEFAULT_LOCALE, USE_BROWSER_LANGUAGE} from 'app/app.constants';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {

    subscription: Subscription;

    constructor(
        public http: HttpClient,
        private router: Router,
        private translate: TranslateService) {
        translate.addLangs(LANGUAGES);
        translate.setDefaultLang(DEFAULT_LOCALE);
        translate.use(DEFAULT_LOCALE);
        // if active, then detects the browser's language, and set it as the application language
        if (USE_BROWSER_LANGUAGE) {
            const browserLang: string = translate.getBrowserLang();
            if (browserLang.match(/en|tr/)) {
                translate.use(browserLang);
            }
        }
    }

    ngOnInit() {
        this.subscription = this.router.events
            .pipe(
                filter(event => event instanceof NavigationEnd)
            )
            .subscribe(() => window.scrollTo(0, 0));
    }


    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

}
