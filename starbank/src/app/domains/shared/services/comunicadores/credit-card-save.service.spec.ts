import { TestBed } from '@angular/core/testing';

import { CreditCardSaveService } from './credit-card-save.service';

describe('CreditCardSaveService', () => {
  let service: CreditCardSaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditCardSaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
