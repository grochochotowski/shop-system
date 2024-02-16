﻿using Microsoft.AspNetCore.Identity;
using shop_system.Entities;
using shop_system.Exceptions;
using shop_system.Models;
using System.ComponentModel.DataAnnotations;

namespace shop_system.Services
{
    public interface IAccountService
    {
        string LoginUser(LoginDto dto);
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
        } // constructor

        public string LoginUser(LoginDto dto)
        {
            var user = _context.Users.FirstOrDefault(u => u.Email == dto.Email || u.Login == dto.Login);

            if (user == null) throw new BadRequestException("Invalid login or password");

            var result = _passwordHasher.VerifyHashedPassword(user, user.Password, dto.Password);
            if(result == PasswordVerificationResult.Failed) throw new BadRequestException("Invalid login or password");
        } // login user
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

            _context.Users.Add(newUser);
            _context.SaveChanges();
        } // register user
    }
}
