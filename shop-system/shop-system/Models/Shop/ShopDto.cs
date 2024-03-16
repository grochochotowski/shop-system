using shop_system.Models.ClothingAvailability;
using shop_system.Models.Address;

namespace shop_system.Models.Shop
{
    public class ShopDto
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public string PhoneNumber { get; set; }



        public int AddressId { get; set; }
        public virtual AddressDto Address { get; set; }



        public virtual ICollection<ClothingAvailabilityDto> Clothes { get; set; }
    }
}
