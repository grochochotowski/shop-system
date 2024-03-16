using shop_system.Models.Clothing;
using shop_system.Models.Shop;

namespace shop_system.Models.ClothingAvailability
{
    public class ClothingAvailabilityDto
    {
        public int Quantity { get; set; }



        public int ClothingId { get; set; }
        public virtual ClothingDto Clothing { get; set; }



        public int ShopId { get; set; }
        public virtual ShopDto Shop { get; set; }
    }
}
