import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashDealsComponent } from './flash-deals.component';

describe('FlashDealsComponent', () => {
  let component: FlashDealsComponent;
  let fixture: ComponentFixture<FlashDealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashDealsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
