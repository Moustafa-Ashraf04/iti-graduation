import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorPromocodesComponent } from './vendor-promocodes.component';

describe('VendorPromocodesComponent', () => {
  let component: VendorPromocodesComponent;
  let fixture: ComponentFixture<VendorPromocodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendorPromocodesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VendorPromocodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
