import { TestBed } from '@angular/core/testing';

import { GeneralCreditService } from './general-credit.service';

describe('GeneralCreditService', () => {
  let service: GeneralCreditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralCreditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
