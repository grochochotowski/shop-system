using Microsoft.AspNetCore.Identity;
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
        private readonly IPasswordHasher<User> _passwordHasher;

        public AccountService(ShopDbContext context, IPasswordHasher<User> passwordHasher)
        {
            _context = context;
            _passwordHasher = passwordHasher;
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
            var hashedPassword = _passwordHasher.HashPassword(newUser, dto.Password);
            newUser.Password = hashedPassword;
        }
    }
}
