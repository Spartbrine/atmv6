import { TestBed } from '@angular/core/testing';

import { PartnerCreditService } from './partner-credit.service';

describe('PartnerCreditService', () => {
  let service: PartnerCreditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartnerCreditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
