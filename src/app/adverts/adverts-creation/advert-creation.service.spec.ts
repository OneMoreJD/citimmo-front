import { TestBed } from '@angular/core/testing';

import { AdvertCreationService } from './advert-creation.service';

describe('AdvertCreationService', () => {
  let service: AdvertCreationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdvertCreationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
