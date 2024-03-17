using System.ComponentModel.DataAnnotations;

namespace shop_system.Models.Client
{
    public class CreateClientDto
    {
        [Required]
        public string InvoiceType { get; set; }
        [Required]
        public string Name { get; set; }
        public string? NIP { get; set; }
        public string? Notes { get; set; }



        [Required]
        public string Country { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public string Street { get; set; }
        [Required]
        public string Building { get; set; }

        public string? Premises { get; set; }
        [Required]
        public string PostalCode { get; set; }
    }
}
