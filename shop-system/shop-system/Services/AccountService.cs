﻿using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using shop_system.Entities;
using shop_system.Exceptions;
using shop_system.Models.Employee;
using System.ComponentModel.DataAnnotations;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace shop_system.Services
{
    public interface IAccountService
    {
        string LoginUser(LoginEmployeeDto dto);
        void RegisterUser(RegisterEmployeeDto dto);
    }

    public class AccountService : IAccountService
    {
        private readonly ShopDbContext _context;
        private readonly IPasswordHasher<Employee> _passwordHasher;
        private readonly AuthenticationSettings _authenticationSettings;

        public AccountService(ShopDbContext context, IPasswordHasher<Employee> passwordHasher, AuthenticationSettings authenticationSettings)
        {
            _context = context;
            _passwordHasher = passwordHasher;
            _authenticationSettings = authenticationSettings;
        } // constructor



        public string LoginUser(LoginEmployeeDto dto)
        {
            var user = _context.Employees
                .Include(u => u.Position)
                .FirstOrDefault(u => u.Login == dto.Login);


            if (user == null) user = _context.Employees.Include(u => u.Position).FirstOrDefault(u => u.Email == dto.Login);
            if (user == null) throw new BadRequestException("Invalid login or password");

            var result = _passwordHasher.VerifyHashedPassword(user, user.Password, dto.Password);
            if(result == PasswordVerificationResult.Failed) throw new BadRequestException("Invalid login or password");

            var claims = new List<Claim>()
            {
                new Claim(ClaimTypes.NameIdentifier, user.Login),
                new Claim(ClaimTypes.Name, $"{user.FirstName} {user.LastName}"),
                new Claim(ClaimTypes.Role, $"{user.Position.Name}"),
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_authenticationSettings.JwtKey));
            var cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.Now.AddDays(_authenticationSettings.JwtExpiresDays);

            var token = new JwtSecurityToken(
                _authenticationSettings.JwtIssuer,
                _authenticationSettings.JwtIssuer,
                claims,
                expires: expires,
                signingCredentials: cred
                );

            var tokenHandler = new JwtSecurityTokenHandler();
            return tokenHandler.WriteToken(token);
        } // login user
        public void RegisterUser(RegisterEmployeeDto dto)
        {            
            var newUser = new Employee
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

            _context.Employees.Add(newUser);
            _context.SaveChanges();
        } // register user
    }
}
