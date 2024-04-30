import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InsurancePolicy } from '../models/insurance-policy-management.model';

@Injectable({
  providedIn: 'root'
})
export class InsurancePolicyService {
  private apiUrl = 'your-backend-api-url';

  constructor(private http: HttpClient) { }

  getAllPolicies(): Observable<InsurancePolicy[]> {
    return this.http.get<InsurancePolicy[]>(`${this.apiUrl}/get-all-policies`);
  }

  createPolicy(policy: InsurancePolicy): Observable<any> {
    return this.http.post(`${this.apiUrl}/create-policy`, policy);
  }

  updatePolicy(policy: InsurancePolicy): Observable<any> {
    return this.http.put(`${this.apiUrl}/update-policy`, policy);
  }

  deletePolicy(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete-policy?id=${id}`);
  }
}
