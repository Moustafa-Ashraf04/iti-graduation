import { TestBed } from '@angular/core/testing';

import { SerachServiceService } from './search-service.service';

describe('SerachServiceService', () => {
  let service: SerachServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerachServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
