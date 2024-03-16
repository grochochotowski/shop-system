using System.ComponentModel.DataAnnotations;

namespace shop_system.Entities
{
    public class Position
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
    }
}
