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

        public string? Notes { get; set; }



        [Required]
        public int AddressId;
        public virtual Address Address { get; set; }



        public virtual ICollection<ClothingAvailability>? Clothes { get; set; }
    }
}
