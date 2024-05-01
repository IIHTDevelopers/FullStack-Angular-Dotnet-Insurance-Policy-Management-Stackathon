
using InsurancePolicyManagement.BusinessLayer.Interfaces;
using InsurancePolicyManagement.BusinessLayer.Services;
using InsurancePolicyManagement.BusinessLayer.Services.Repository;
using InsurancePolicyManagement.BusinessLayer.ViewModels;
using InsurancePolicyManagement.Entities;
using Moq;
using System;
using System.Threading.Tasks;
using Xunit;
using Xunit.Abstractions;

namespace InsurancePolicyManagement.Tests.TestCases
{
    public class FunctionalTests
    {
        private readonly ITestOutputHelper _output;
        private readonly IInsurancePolicyService _insuranceService;
        public readonly Mock<IInsurancePolicyRepository> insuranceservice = new Mock<IInsurancePolicyRepository>();

        private readonly InsurancePolicy _insurancePolicy;
        private readonly InsurancePolicyViewModel _insurancePolicyViewModel;

        private static string type = "Functional";

        public FunctionalTests(ITestOutputHelper output)
        {
            _insuranceService = new InsurancePolicyService(insuranceservice.Object);

            _output = output;

            _insurancePolicy = new InsurancePolicy
            {
                PolicyId = 1,
                CustomerId = 11,
                EndDate = DateTime.Now,
                StartDate = DateTime.Now,
                IsActive = true,
                PolicyNumber = "HI123",
                PolicyType = "Home Insurance",
                PremiumAmount = 12000
            };

            _insurancePolicyViewModel = new InsurancePolicyViewModel
            {
                PolicyId = 1,
                CustomerId = 11,
                EndDate = DateTime.Now,
                StartDate = DateTime.Now,
                IsActive = true,
                PolicyNumber = "HI123",
                PolicyType = "Home Insurance",
                PremiumAmount = 12000
            };
        }

        [Fact]
        public async Task<bool> Testfor_Create_InsurancePolicy()
        {
            //Arrange
            var res = false;
            string testName; string status;
            testName = CallAPI.GetCurrentMethodName();

            //Action
            try
            {
                insuranceservice.Setup(repos => repos.CreateInsurancePolicy(_insurancePolicy)).ReturnsAsync(_insurancePolicy);
                var result = await _insuranceService.CreateInsurancePolicy(_insurancePolicy);
                //Assertion
                if (result != null)
                {
                    res = true;
                }
            }
            catch (Exception)
            {
                //Assert
                status = Convert.ToString(res);
                _output.WriteLine(testName + ":Failed");
                await CallAPI.saveTestResult(testName, status, type);
                return false;
            }
            status = Convert.ToString(res);
            if (res == true)
            {
                _output.WriteLine(testName + ":Passed");
            }
            else
            {
                _output.WriteLine(testName + ":Failed");
            }
            await CallAPI.saveTestResult(testName, status, type);
            return res;
        }
    }
}
