using InsurancePolicyManagement.BusinessLayer.ViewModels;
using InsurancePolicyManagement.DataLayer;
using InsurancePolicyManagement.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InsurancePolicyManagement.BusinessLayer.Services.Repository
{
    public class InsurancePolicyRepository : IInsurancePolicyRepository
    {
        private readonly InsuranceDbContext _dbContext;
        public InsurancePolicyRepository(InsuranceDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<InsurancePolicy> CreateInsurancePolicy(InsurancePolicy insurancePolicy)
        {
            try
            {
                var result = await _dbContext.InsurancePolicies.AddAsync(insurancePolicy);
                await _dbContext.SaveChangesAsync();
                return insurancePolicy;
            }
            catch (Exception ex)
            {
                throw (ex);
            }
        }

        public List<InsurancePolicy> GetAllInsurancePolicies()
        {
            try
            {
                var result = _dbContext.InsurancePolicies.
                OrderByDescending(x => x.PolicyId).Take(10).ToList();
                return result;
            }
            catch (Exception ex)
            {
                throw (ex);
            }
        }
    }
}
