using Microsoft.AspNetCore.Mvc;
using shop_system.Models;
using shop_system.Services;
using static shop_system.Services.UserService;

namespace shop_system.Controllers
{
    [Route("api/user")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }


        [HttpGet]
        public ActionResult<IEnumerable<UserWShopDto>> GetAllUsersWithShop()
        {
            var usersWithShopDto = _userService.GetAllUsersWithShop();

            return Ok(usersWithShopDto);
        } // Get all users with their shops
    }
}
