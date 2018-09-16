import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class I18nSwitcherService {

  private switch: Subject<string> = new Subject();

  constructor() {
  }

  watch(): Observable<string> {
    return this.switch.asObservable();
  }

  switchLang(lang: string) {
    this.switch.next(lang);
  }

}
