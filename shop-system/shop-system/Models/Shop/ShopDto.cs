using shop_system.Entities;
using shop_system.Models.ClothingAvailability;

namespace shop_system.Models.Shop
{
    public class ShopDto
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public int AddressId { get; set; }
        public string PhoneNumber { get; set; }

        public virtual ICollection<ClothingAvailabilityDto> Clothes { get; set; }
        public virtual Address Address { get; set; }
    }
}
