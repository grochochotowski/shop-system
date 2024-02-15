using shop_system.Entities;
using shop_system.Models;
using System.ComponentModel.DataAnnotations;

namespace shop_system.Services
{
    public interface IAccountService
    {
        void RegisterUser(RegisterUserDto dto);
    }

    public class AccountService : IAccountService
    {
        private readonly ShopDbContext _context;

        public AccountService(ShopDbContext context)
        {
            _context = context;
        }

        public void RegisterUser(RegisterUserDto dto)
        {
            var newUser = new User
            {
                FirstName = dto.FirstName,
                SecondName = dto.SecondName,
                LastName = dto.LastName,
                Login = dto.Login,
                Email = dto.Email,
                PhoneNumber = dto.PhoneNumber,
                ShopId = dto.ShopId,
                PositionId = dto.PositionId
            };
        }
    }
}
