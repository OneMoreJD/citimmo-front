import { TestBed } from '@angular/core/testing';

import { AdvertsUpdateService } from './adverts-update.service';

describe('AdvertsUpdateService', () => {
  let service: AdvertsUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdvertsUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
