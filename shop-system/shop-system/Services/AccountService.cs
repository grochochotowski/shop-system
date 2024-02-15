using shop_system.Entities;
using shop_system.Models;
using System.ComponentModel.DataAnnotations;

namespace shop_system.Services
{
    public class AccountService
    {
        private readonly ShopDbContext _context;

        public AccountService(ShopDbContext context)
        {
            _context = context;
        }
        
    }
}
