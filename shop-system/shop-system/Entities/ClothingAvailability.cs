using System.ComponentModel.DataAnnotations;

namespace shop_system.Entities
{
    public class ClothingAvailability
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public int Quantity { get; set; }



        [Required]
        public int ShopId { get; set; }
        public virtual Shop Shop { get; set; }



        [Required]
        public int ClothingId { get; set; }
        public virtual Clothing Clothing { get; set; }
    }
}
