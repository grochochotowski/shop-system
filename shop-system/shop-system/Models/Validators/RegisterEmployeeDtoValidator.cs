﻿using FluentValidation;
using shop_system.Entities;
using shop_system.Models.Employee;
namespace shop_system.Models.Validators
{
    public class RegisterEmployeeDtoValidator : AbstractValidator<RegisterEmployeeDto>
    {
        public RegisterEmployeeDtoValidator(ShopDbContext dbContext)
        {
            // Email
            RuleFor(x => x.Email)
                .NotEmpty()
                .EmailAddress();
            RuleFor(x => x.Email)
                .Custom((value, context) =>
                {
                    var emailInUse = dbContext.Employees.Any(u => u.Email == value);
                    if (emailInUse) context.AddFailure("Email", "Email is taken");
                });

            // Password
            RuleFor(x => x.Password).MinimumLength(6);
            RuleFor(x => x.ConfirmPassword).Equal(e => e.Password);

            // Login
            RuleFor(x => x.Login).NotEmpty();
            RuleFor(x => x.Login)
                .Custom((value, context) =>
                {
                    var loginInUse = dbContext.Employees.Any(u => u.Login == value);
                    if (loginInUse) context.AddFailure("Login", "Login is taken");
                });
        }
    }
}
