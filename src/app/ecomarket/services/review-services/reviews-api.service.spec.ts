import { TestBed } from '@angular/core/testing';

import { ReviewsApiService } from './reviews-api.service';

describe('ReviewsApiService', () => {
  let service: ReviewsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
