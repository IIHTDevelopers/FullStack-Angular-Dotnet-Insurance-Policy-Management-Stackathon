import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { InsurancePolicyService } from './insurance-policy.service';
import { InsurancePolicy } from '../models/insurance-policy-management.model';

describe('InsurancePolicyService', () => {
  let service: InsurancePolicyService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [InsurancePolicyService]
    });
    service = TestBed.inject(InsurancePolicyService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('business', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should fetch all policies', () => {
      const expectedPolicies: InsurancePolicy[] = [
        {
          policyId: 1,
          policyNumber: '',
          policyType: '',
          premiumAmount: 0,
          startDate: new Date(),
          endDate: new Date(),
          isActive: false,
          customerId: 0
        }
      ];
      service.getAllPolicies().subscribe(policies => {
        expect(policies).toEqual(expectedPolicies);
      });
      const req = httpTestingController.expectOne('http://localhost:5000/get-all-policies');
      expect(req.request.method).toEqual('GET');
      req.flush(expectedPolicies);
    });

    it('should create a new policy', () => {
      const newPolicy: InsurancePolicy = {
        policyId: 1,
        policyNumber: '',
        policyType: '',
        premiumAmount: 0,
        startDate: new Date(),
        endDate: new Date(),
        isActive: false,
        customerId: 0
      };
      service.createPolicy(newPolicy).subscribe(policy => {
        expect(policy).toEqual(newPolicy);
      });
      const req = httpTestingController.expectOne('http://localhost:5000/create-policy');
      expect(req.request.method).toEqual('POST');
      req.flush(newPolicy);
    });
  });
});