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

        public void Seed()
        {
            if (_context.Database.CanConnect())
            {
                if (!_context.Positions.Any())
                {
                    var positions = GetPositions();
                    _context.Positions.AddRange(positions);
                    _context.SaveChanges();
                }
            }
        }

        public IEnumerable<Position> GetPositions()
        {
            var postions = new List<Position>()
            {
                new Position { Name = "COO"},
                new Position { Name = "Accountant"},
                new Position { Name = "Manager"},
                new Position { Name = "Deputy Manager"},
                new Position { Name = "Decorator"},
                new Position { Name = "Shop Assistant"}
            };

            return postions;
        }
    }
}
