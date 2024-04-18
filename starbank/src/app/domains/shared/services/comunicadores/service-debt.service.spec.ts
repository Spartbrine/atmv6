import { TestBed } from '@angular/core/testing';

import { ServiceDebtService } from './service-debt.service';

describe('ServiceDebtService', () => {
  let service: ServiceDebtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDebtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
