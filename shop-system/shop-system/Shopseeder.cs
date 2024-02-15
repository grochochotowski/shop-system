using shop_system.Entities;

namespace shop_system
{
    public class Shopseeder
    {
        private readonly ShopDbContext _context;

        public Shopseeder(ShopDbContext context)
        {
            _context = context;
        }
    }
}
