import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { InsurancePolicyComponent } from './insurance-policy-management.component';
import { InsurancePolicyService } from '../../services/insurance-policy.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('InsurancePolicyComponent', () => {
  let component: InsurancePolicyComponent;
  let fixture: ComponentFixture<InsurancePolicyComponent>;
  let insurancePolicyService: InsurancePolicyService;
  let mockInsurancePolicyService: jest.Mocked<InsurancePolicyService>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [InsurancePolicyComponent],
      imports: [ReactiveFormsModule, HttpClientModule, FormsModule],
      providers: [InsurancePolicyService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurancePolicyComponent);
    component = fixture.componentInstance;
    insurancePolicyService = TestBed.inject(InsurancePolicyService);
    fixture.detectChanges();
  });

  describe('boundary', () => {
    it('should be created', () => {
      expect(component).toBeTruthy();
    });

    it('should display "Insurance Policies" in the h2 tag', () => {
      const h2: HTMLElement = fixture.debugElement.query(By.css('h2')).nativeElement;
      expect(h2.textContent).toContain('Insurance Policies');
    });

    it('should have a text field for Policy Number', () => {
      const policyNumberInput = fixture.debugElement.query(By.css('input[name="policyNumber"]'));
      expect(policyNumberInput).toBeTruthy();
    });
  });
});
