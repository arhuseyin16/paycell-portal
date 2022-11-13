import { Component } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { DEFAULT_LOCALE, LANGUAGES, LANGUAGE_META } from 'app/app.constants';
import { Subscription } from 'rxjs';

@Component({
  selector: "app-lang-selector",
  templateUrl: "./lang-selector.component.html",
  styleUrls: ["./lang-selector.component.scss"]
})
export class LangSelectorComponent {

  languages = LANGUAGES;
  languagesMeta = LANGUAGE_META;
  selectedLanguage = {"text": "", "flagImagePath": ""};
  langChangeSubscription: Subscription;

  constructor(public translate: TranslateService) {}

  ngOnInit() {
    this.changeSelectedLanguage(this.getLang());
    this.langChangeSubscription = this.translate.onLangChange.subscribe((newLang: LangChangeEvent) => {
      this.changeSelectedLanguage(newLang?.lang.toLowerCase() || this.getLang());
    });
  }

  getLang(): string {
    return (this.translate.currentLang || this.translate.defaultLang || DEFAULT_LOCALE).toLowerCase();
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }

  changeSelectedLanguage(language: string) {
    this.selectedLanguage = LANGUAGE_META[language];
  }

  ngOnDestroy() {
    this.langChangeSubscription.unsubscribe();
  }

}
