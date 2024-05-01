// insurance-policy-management.component.ts

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
  policyForm: InsurancePolicy = {} as InsurancePolicy; // Initialize with an empty object
  editingPolicy = false;

  constructor(private insurancePolicyService: InsurancePolicyService) { }

  ngOnInit(): void {
    this.loadPolicies();
  }

  loadPolicies(): void {
    this.insurancePolicyService.getAllPolicies().subscribe(policies => {
      this.policies = policies;
    });
  }

  addNewPolicy(): void {
    this.editingPolicy = false;
    this.policyForm = {} as InsurancePolicy; // Clear form by assigning an empty object
  }

  editPolicy(policy: InsurancePolicy): void {
    this.editingPolicy = true;
    this.insurancePolicyService.getPolicyById(policy.policyId).subscribe(policyDetails => {
      this.policyForm = policyDetails;
    });
  }

  submitForm(): void {
    if (this.editingPolicy) {
      this.insurancePolicyService.updatePolicy(this.policyForm).subscribe(() => {
        this.loadPolicies();
        this.resetForm();
      });
    } else {
      this.insurancePolicyService.createPolicy(this.policyForm).subscribe(() => {
        this.loadPolicies();
        this.resetForm();
      });
    }
  }

  deletePolicy(id: number): void {
    this.insurancePolicyService.deletePolicy(id).subscribe(() => {
      this.loadPolicies();
    });
  }

  resetForm(): void {
    this.policyForm = {} as InsurancePolicy;
    this.editingPolicy = false;
  }

  cancelEdit(): void {
    this.editingPolicy = false;
    this.policyForm = {} as InsurancePolicy;
  }
}
