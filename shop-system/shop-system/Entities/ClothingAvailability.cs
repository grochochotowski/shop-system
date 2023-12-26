namespace shop_system.Entities
{
    public class ClothingAvailability
    {
        public int Id { get; set; }
        public int Quantity { get; set; }
        public int ClothingId { get; set; }
        public int ShopId { get; set; }

        public virtual Clothing Clothing { get; set; }
    }
}
