
using FluentValidation;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using shop_system.Entities;
using shop_system.Models;
using shop_system.Models.Validators;
using shop_system.Serivces;
using shop_system.Services;
using System.Reflection;

namespace shop_system
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            var configuration = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build();

            // Add services to the container.

            builder.Services.AddControllers();
            builder.Services.AddControllers().AddFluentValidation();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddAutoMapper(Assembly.GetExecutingAssembly());
            builder.Services.AddDbContext<ShopDbContext>(o => o.UseSqlServer(configuration.GetConnectionString("ShopDbConnection")));

            builder.Services.AddScoped<ShopSeeder>();

            builder.Services.AddScoped<IShopService, ShopService>();
            builder.Services.AddScoped<IClothingAvailabilityService, ClothingAvailabilityService>();
            builder.Services.AddScoped<IClothingService, ClothingService>();
            builder.Services.AddScoped<IAccountService, AccountService>();

            builder.Services.AddScoped<IPasswordHasher<User>, PasswordHasher<User>>();
            builder.Services.AddScoped<IValidator<RegisterUserDto>, RegisterUserDtoValidator>();

            var app = builder.Build();
            var scope = app.Services.CreateScope();
            var seeder = scope.ServiceProvider.GetRequiredService<ShopSeeder>();

            seeder.Seed();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
