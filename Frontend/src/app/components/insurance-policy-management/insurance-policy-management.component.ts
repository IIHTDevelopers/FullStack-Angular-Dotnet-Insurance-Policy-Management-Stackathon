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
  policyForm: InsurancePolicy = {} as InsurancePolicy;
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
    this.policyForm = {} as InsurancePolicy;
  }

  submitForm(): void {
    this.insurancePolicyService.createPolicy(this.policyForm).subscribe(() => {
      this.loadPolicies();
    });
  }
}
