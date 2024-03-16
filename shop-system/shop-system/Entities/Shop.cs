using System.ComponentModel.DataAnnotations;

namespace shop_system.Entities
{
    public class Shop
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Code { get; set; }
        [Required]
        public string PhoneNumber { get; set; }
        [Required]
        public int AddressID;
        public string? Notes { get; set; }

        public virtual Address Address { get; set; }
        public virtual List<ClothingAvailability>? Clothes { get; set; }
    }
}
