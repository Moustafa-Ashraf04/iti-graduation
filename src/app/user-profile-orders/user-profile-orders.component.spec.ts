import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileOrdersComponent } from './user-profile-orders.component';

describe('UserProfileOrdersComponent', () => {
  let component: UserProfileOrdersComponent;
  let fixture: ComponentFixture<UserProfileOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProfileOrdersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserProfileOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
