import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { vendorAuthGuard } from './vendor-auth.guard';

describe('vendorAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => vendorAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
