using System.ComponentModel.DataAnnotations;

namespace shop_system.Entities
{
    public class Address
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Country { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public string Street { get; set; }
        [Required]
        public string Buidling { get; set; }
        [Required]
        public string Premises { get; set; }
        [Required]
        public string PostalCode { get; set; }
    }
}
