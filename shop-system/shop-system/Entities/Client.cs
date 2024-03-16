using System.ComponentModel.DataAnnotations;

namespace shop_system.Entities
{
    public class Client
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }

        public string? Notes { get; set; }



        [Required]
        public int AddressId { get; set; }
        public virtual Address Address { get; set; }
    }
}
