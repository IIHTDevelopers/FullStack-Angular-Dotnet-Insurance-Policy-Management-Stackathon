import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancePolicyManagementComponent } from './insurance-policy-management.component';

describe('InsurancePolicyManagementComponent', () => {
  let component: InsurancePolicyManagementComponent;
  let fixture: ComponentFixture<InsurancePolicyManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsurancePolicyManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsurancePolicyManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
