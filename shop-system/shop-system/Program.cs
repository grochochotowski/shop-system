using FluentValidation;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using NLog.Web;
using shop_system.Entities;
using shop_system.Middleware;
using shop_system.Models.Employee;
using shop_system.Models.Validators;
using shop_system.Serivces;
using shop_system.Services;
using System.Reflection;
using System.Text;

namespace shop_system
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            var configuration = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build();
            var authenticationSettings = new AuthenticationSettings();
            configuration.GetSection("Authentication").Bind(authenticationSettings);

            // NLog: Setup NLog for Dependency injection
            builder.Logging.ClearProviders();
            builder.Logging.SetMinimumLevel(LogLevel.Trace);
            builder.Host.UseNLog();

            // Add services to the container.

            builder.Services.AddCors(options =>
            {
                options.AddPolicy("FrontEndClient", builder =>
                {
                    builder.AllowAnyMethod()
                    .AllowAnyHeader()
                    .WithOrigins("http://localhost:3000");
                });
            });
            builder.Services.AddSingleton(authenticationSettings);
            builder.Services.AddControllers();
            builder.Services.AddControllers().AddFluentValidation();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddAutoMapper(Assembly.GetExecutingAssembly());
            builder.Services.AddDbContext<ShopDbContext>(o => o.UseSqlServer(configuration.GetConnectionString("ShopDbConnection")));
            builder.Services.AddAuthentication(option => {
                option.DefaultAuthenticateScheme = "Bearer";
                option.DefaultScheme = "Bearer";
                option.DefaultChallengeScheme = "Bearer";
            }).AddJwtBearer(cfg => {
                cfg.RequireHttpsMetadata = false;
                cfg.SaveToken = true;
                cfg.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidIssuer = authenticationSettings.JwtIssuer,
                    ValidAudience = authenticationSettings.JwtIssuer,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(authenticationSettings.JwtKey)),
                };
            });

            builder.Services.AddScoped<ShopSeeder>();
            builder.Services.AddScoped<ErrorHandlingMiddleware>();
            builder.Services.AddScoped<RequestTimeMiddleware>();

            builder.Services.AddScoped<IClientService, ClientService>();
            builder.Services.AddScoped<IAccountService, AccountService>();
            builder.Services.AddScoped<IClothingService, ClothingService>();
            builder.Services.AddScoped<IShopService, ShopService>();

            builder.Services.AddScoped<IPasswordHasher<Employee>, PasswordHasher<Employee>>();
            builder.Services.AddScoped<IValidator<RegisterEmployeeDto>, RegisterEmployeeDtoValidator>();


            var app = builder.Build();
            var scope = app.Services.CreateScope();
            var seeder = scope.ServiceProvider.GetRequiredService<ShopSeeder>();

            // Configure the HTTP request pipeline.

            app.UseCors("FrontEndClient");
            seeder.Seed();


            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseMiddleware<ErrorHandlingMiddleware>();
            app.UseMiddleware<RequestTimeMiddleware>();

            app.UseAuthentication();

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
