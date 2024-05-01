using InsurancePolicyManagement.BusinessLayer.Interfaces;
using InsurancePolicyManagement.BusinessLayer.ViewModels;
using InsurancePolicyManagement.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace InsurancePolicyManagement.Controllers
{
    [ApiController]
    public class InsurancePolicyController : ControllerBase
    {
        private readonly IInsurancePolicyService _insurancePolicyService;
        public InsurancePolicyController(IInsurancePolicyService insurancePolicyService)
        {
            _insurancePolicyService = insurancePolicyService;
        }

        [HttpPost]
        [Route("create-policy")]
        [AllowAnonymous]
        public async Task<IActionResult> CreateInsurancePolicy([FromBody] InsurancePolicy model)
        {
            var policyExists = await _insurancePolicyService.GetInsurancePolicyById(model.PolicyId);
            if (policyExists != null)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Insurance Policy already exists!" });
            var result = await _insurancePolicyService.CreateInsurancePolicy(model);
            if (result == null)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Insurance Policy creation failed! Please check details and try again." });

            return Ok(new Response { Status = "Success", Message = "Insurance Policy created successfully!" });

        }

        [HttpGet]
        [Route("get-all-policies")]
        public async Task<IEnumerable<InsurancePolicy>> GetAllPolicies()
        {
            return _insurancePolicyService.GetAllInsurancePolicies();
        }
    }
}
