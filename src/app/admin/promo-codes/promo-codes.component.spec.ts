import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoCodesComponent } from './promo-codes.component';

describe('PromoCodesComponent', () => {
  let component: PromoCodesComponent;
  let fixture: ComponentFixture<PromoCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromoCodesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PromoCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
