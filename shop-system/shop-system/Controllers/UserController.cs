using Microsoft.AspNetCore.Mvc;
using shop_system.Models;
using shop_system.Services;

namespace shop_system.Controllers
{
    [Route("api/user")]
    public class UserController
    {
        private readonly IUserSerivce _userService;

        public UserController(IUserSerivce userService)
        {
            _userService = userService;
        }


        [HttpGet]
        public ActionResult<IEnumerable<ShopDto>> GetAll()
        {
            var usersWithShopDto = _userService.GetAll();

            return Ok(usersWithShopDto);
        } // Get all users with their shops
    }
}
