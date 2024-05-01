using InsurancePolicyManagement.BusinessLayer.Interfaces;
using InsurancePolicyManagement.BusinessLayer.Services.Repository;
using InsurancePolicyManagement.BusinessLayer.ViewModels;
using InsurancePolicyManagement.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace InsurancePolicyManagement.BusinessLayer.Services
{
    public class InsurancePolicyService : IInsurancePolicyService
    {
        private readonly IInsurancePolicyRepository _insurancePolicyRepository;

        public InsurancePolicyService(IInsurancePolicyRepository insurancePolicyRepository)
        {
            _insurancePolicyRepository = insurancePolicyRepository;
        }

        public async Task<InsurancePolicy> CreateInsurancePolicy(InsurancePolicy insurancePolicy)
        {
            return await _insurancePolicyRepository.CreateInsurancePolicy(insurancePolicy);
        }

        public List<InsurancePolicy> GetAllInsurancePolicies()
        {
            return _insurancePolicyRepository.GetAllInsurancePolicies();
        }
    }
}
