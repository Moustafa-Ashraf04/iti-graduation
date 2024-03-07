import { TestBed } from '@angular/core/testing';

import { AuthVendor } from './authVendor.service';

describe('AuthVendor', () => {
  let service: AuthVendor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthVendor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
