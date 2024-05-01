using InsurancePolicyManagement.BusinessLayer.ViewModels;
using InsurancePolicyManagement.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace InsurancePolicyManagement.BusinessLayer.Services.Repository
{
    public interface IInsurancePolicyRepository
    {
        List<InsurancePolicy> GetAllInsurancePolicies();
        Task<InsurancePolicy> CreateInsurancePolicy(InsurancePolicy insurancePolicy);
    }
}
