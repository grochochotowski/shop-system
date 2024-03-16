using System.ComponentModel.DataAnnotations;

namespace shop_system
{
    public class CreateClothingDto
    {
        [Required]
        public string Season { get; set; }
        [Required]
        public string Code { get; set; }
        [Required]
        public string Category { get; set; }
        [Required]
        public string Colour { get; set; }
        [Required]
        public int Size { get; set; }
        [Required]
        public double Price { get; set; }
    }
}
