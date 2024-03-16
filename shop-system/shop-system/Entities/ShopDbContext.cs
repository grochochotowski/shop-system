using Microsoft.EntityFrameworkCore;

namespace shop_system.Entities
{
    public class ShopDbContext : DbContext
    {
        public ShopDbContext(DbContextOptions<ShopDbContext> options) : base(options) { }

        public DbSet<Shop> Shops { get; set; }
        public DbSet<ClothingAvailability> ClothingAvailability { get; set; }
        public DbSet<Clothing> Clothes { get; set; }
        public DbSet<Employee> Users { get; set; }
        public DbSet<Position> Positions { get; set; }
        public DbSet<Client> Clients { get; set; }
        public DbSet<Address> Addresses { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
