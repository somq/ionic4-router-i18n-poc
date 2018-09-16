import { Component, OnDestroy } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

import {TranslateService, LangChangeEvent} from '@ngx-translate/core';
import { I18nSwitcherService } from '../services/i18n-switcher.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnDestroy {
  products: any;
  param = {value: 'world'};
  lang: string;
  
  constructor(
    public dataS: DataService,
    public router: Router,
    public translate: TranslateService,
    public i18nSwitcher: I18nSwitcherService
    ) {
    this.dataS.data$.subscribe(res => {
      this.products = res
      console.log(`res: `, res);
    })
    // this.router.navigateByUrl('/details');
    // this.router.navigate(['/details', this.CData]);

    this.lang = 'en';
    
    this.translate.get('APPLE').subscribe(
      value => {
        console.log(`value: `, value);
        // value is our translated string
        // let alertTitle = value;
      }
    )
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log("lang changed detected", event);
     });
  }

  switchLanguage(lang) {
    this.lang = lang;
    this.i18nSwitcher.switchLang(lang);
    console.log(`translate: `, this.translate.currentLang);
  }
  ngOnDestroy() {
    this.dataS.data$.unsubscribe();
  }
}
