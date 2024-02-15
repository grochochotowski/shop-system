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
                new Position { Id = 1, Name = "COO"},
                new Position { Id = 2, Name = "Accountant"},
                new Position { Id = 3, Name = "Manager"},
                new Position { Id = 4, Name = "Deputy Manager"},
                new Position { Id = 5, Name = "Decorator"},
                new Position { Id = 6, Name = "Shop Assistant"}
            };

            return postions;
        }
    }
}
