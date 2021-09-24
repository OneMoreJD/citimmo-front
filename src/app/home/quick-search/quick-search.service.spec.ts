import { TestBed } from '@angular/core/testing';

import { QuickSearchService } from './quick-search.service';

describe('QuickSearchService', () => {
  let service: QuickSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuickSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
