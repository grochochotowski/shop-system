using System.ComponentModel.DataAnnotations;

namespace shop_system.Entities
{
    public class Client
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string InvoiceType { get; set; }
        [Required]
        public string ClientName { get; set; }

        public string? NIP { get; set; }

        public string? Notes { get; set; }



        [Required]
        public int AddressId { get; set; }
        public virtual Address Address { get; set; }
    }
}
