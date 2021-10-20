import { TestBed } from '@angular/core/testing';

import { AdvertDetailsService } from './advert-details.service';

describe('AdvertService', () => {
  let service: AdvertDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdvertDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
