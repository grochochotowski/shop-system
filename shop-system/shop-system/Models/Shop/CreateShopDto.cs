using System.ComponentModel.DataAnnotations;

namespace shop_system.Models.Shop
{
    public class CreateShopDto
    {
        [Required]
        public string Code { get; set; }
        [Required]
        public string PhoneNumber { get; set; }
        public string? Notes { get; set; }



        [Required]
        public int AddressID;
    }
}
