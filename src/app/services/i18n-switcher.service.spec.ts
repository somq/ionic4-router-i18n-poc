import { TestBed, inject } from '@angular/core/testing';

import { I18nSwitcherService } from './i18n-switcher.service';

describe('I18nSwitcherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [I18nSwitcherService]
    });
  });

  it('should be created', inject([I18nSwitcherService], (service: I18nSwitcherService) => {
    expect(service).toBeTruthy();
  }));
});
