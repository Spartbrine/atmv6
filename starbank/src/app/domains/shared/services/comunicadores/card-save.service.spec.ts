import { TestBed } from '@angular/core/testing';

import { CardSaveService } from './card-save.service';

describe('CardSaveService', () => {
  let service: CardSaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardSaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
