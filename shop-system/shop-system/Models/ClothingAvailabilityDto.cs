using shop_system.Entities;

namespace shop_system.Models
{
    public class ClothingAvailabilityDto
    {
        public int Id { get; set; }
        public int Quantity { get; set; }
        public int ClothingId { get; set; }

        public ClothingDto Clothing { get; set; }
    }
}
