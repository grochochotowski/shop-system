using shop_system.Entities;

namespace shop_system
{
    public class ShopSeeder
    {
        private readonly ShopDbContext _context;

        public ShopSeeder(ShopDbContext context)
        {
            _context = context;
        }


    }
}
