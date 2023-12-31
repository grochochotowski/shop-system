
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using shop_system.Entities;
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
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddAutoMapper(Assembly.GetExecutingAssembly());
            builder.Services.AddDbContext<ShopDbContext>(o => o.UseSqlServer(configuration.GetConnectionString("ShopDbConnection")));

            builder.Services.AddScoped<IShopService, ShopService>();
            builder.Services.AddScoped<IClothingAvailabilityService, ClothingAvailabilityService>();
            builder.Services.AddScoped<IClothingService, ClothingService>();

            var app = builder.Build();

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
