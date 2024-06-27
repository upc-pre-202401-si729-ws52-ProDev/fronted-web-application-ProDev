import { TestBed } from '@angular/core/testing';

import { PurchaseApiService } from './purchase-api.service';

describe('PurchaseApiService', () => {
  let service: PurchaseApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchaseApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
