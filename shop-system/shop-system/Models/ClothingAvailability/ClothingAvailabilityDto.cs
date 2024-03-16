using shop_system.Entities;

namespace shop_system.Models.ClothingAvailability
{
    public class ClothingAvailabilityDto
    {
        public int Quantity { get; set; }



        public int ClothingId { get; set; }
        public virtual Clothing Clothing { get; set; }



        public int ShopId { get; set; }
        public virtual Shop Shop { get; set; }
    }
}
