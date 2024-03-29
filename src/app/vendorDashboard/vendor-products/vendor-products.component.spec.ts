import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorProductsComponent } from './vendor-products.component';

describe('VendorProductsComponent', () => {
  let component: VendorProductsComponent;
  let fixture: ComponentFixture<VendorProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendorProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VendorProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
