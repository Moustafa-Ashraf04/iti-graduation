import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorPlansComponent } from './vendor-plans.component';

describe('VendorPlansComponent', () => {
  let component: VendorPlansComponent;
  let fixture: ComponentFixture<VendorPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendorPlansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VendorPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
