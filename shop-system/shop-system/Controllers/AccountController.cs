using Microsoft.AspNetCore.Mvc;
using Microsoft.Win32;
using shop_system.Models.Employee;
using shop_system.Services;

namespace shop_system.Controllers
{
    [Route("api/account")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAccountService _accountService;

        public AccountController(IAccountService accountService)
        {
            _accountService = accountService;
        }



        [HttpPost("register")]
        public ActionResult RegisterUser([FromBody] RegisterEmployeeDto dto)
        {
            _accountService.RegisterUser(dto);
            return Ok();
        } // register user

        [HttpPost("login")]
        public ActionResult LoginUser([FromBody] LoginEmployeeDto dto)
        {
            var token = _accountService.LoginUser(dto);
            return Ok(token);
        } // login user
    }
}
