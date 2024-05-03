import { TestBed } from '@angular/core/testing';

import { DonationApiService } from './donation-api.service';

describe('DonationApiService', () => {
  let service: DonationApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonationApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
