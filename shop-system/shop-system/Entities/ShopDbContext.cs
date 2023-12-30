using Microsoft.EntityFrameworkCore;

namespace shop_system.Entities
{
    public class ShopDbContext : DbContext
    {
        public ShopDbContext(DbContextOptions<ShopDbContext> options) : base(options) { }

        public DbSet<Shop> Shops { get; set; }
        public DbSet<ClothingAvailability> ClothingAvailability { get; set; }
        public DbSet<Clothing> Clothes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Shop>().Property(s => s.Id).IsRequired();
            modelBuilder.Entity<Shop>().Property(s => s.Country).IsRequired();
            modelBuilder.Entity<Shop>().Property(s => s.Region).IsRequired();
            modelBuilder.Entity<Shop>().Property(s => s.City).IsRequired();
            modelBuilder.Entity<Shop>().Property(s => s.Street).IsRequired();
            modelBuilder.Entity<Shop>().Property(s => s.Building).IsRequired();
            modelBuilder.Entity<Shop>().Property(s => s.Premises).IsRequired(false);
            modelBuilder.Entity<Shop>().Property(s => s.PostalCode).IsRequired();
            modelBuilder.Entity<Shop>().Property(s => s.PhoneNumber).IsRequired();

            modelBuilder.Entity<ClothingAvailability>().Property(c => c.Id).IsRequired();
            modelBuilder.Entity<ClothingAvailability>().Property(c => c.Quantity).IsRequired();
            modelBuilder.Entity<ClothingAvailability>().Property(c => c.ClothingId).IsRequired();

            modelBuilder.Entity<Clothing>().Property(c => c.Id).IsRequired();
            modelBuilder.Entity<Clothing>().Property(c => c.Season).IsRequired();
            modelBuilder.Entity<Clothing>().Property(c => c.Code).IsRequired();
            modelBuilder.Entity<Clothing>().Property(c => c.Category).IsRequired();
            modelBuilder.Entity<Clothing>().Property(c => c.Colour).IsRequired();
            modelBuilder.Entity<Clothing>().Property(c => c.Size).IsRequired();
            modelBuilder.Entity<Clothing>().Property(c => c.Price).IsRequired();
        }
    }
}
