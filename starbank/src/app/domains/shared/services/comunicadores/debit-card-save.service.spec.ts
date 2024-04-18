import { TestBed } from '@angular/core/testing';

import { DebitCardSaveService } from './debit-card-save.service';

describe('DebitCardSaveService', () => {
  let service: DebitCardSaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DebitCardSaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
