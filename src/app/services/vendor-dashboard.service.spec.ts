import { TestBed } from '@angular/core/testing';

import { VendorDashboardService } from './vendor-dashboard.service';

describe('VendorDashboardService', () => {
  let service: VendorDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
