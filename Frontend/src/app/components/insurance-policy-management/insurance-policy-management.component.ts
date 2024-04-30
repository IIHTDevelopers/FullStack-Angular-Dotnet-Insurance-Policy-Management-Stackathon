import { Component, OnInit } from '@angular/core';
import { InsurancePolicyService } from '../../services/insurance-policy.service';
import { InsurancePolicy } from '../../models/insurance-policy-management.model';

@Component({
  selector: 'app-insurance-policy',
  templateUrl: './insurance-policy-management.component.html',
  styleUrls: ['./insurance-policy-management.component.css']
})
export class InsurancePolicyComponent implements OnInit {
  policies: InsurancePolicy[] = [];

  constructor(private insurancePolicyService: InsurancePolicyService) { }

  ngOnInit(): void {
    this.loadPolicies();
  }

  loadPolicies(): void {
    this.insurancePolicyService.getAllPolicies().subscribe(policies => {
      this.policies = policies;
    });
  }

  addPolicy(policy: InsurancePolicy): void {
    this.insurancePolicyService.createPolicy(policy).subscribe(() => {
      this.loadPolicies();
    });
  }

  updatePolicy(policy: InsurancePolicy): void {
    this.insurancePolicyService.updatePolicy(policy).subscribe(() => {
      this.loadPolicies();
    });
  }

  deletePolicy(id: number): void {
    this.insurancePolicyService.deletePolicy(id).subscribe(() => {
      this.loadPolicies();
    });
  }
}
