using System.ComponentModel.DataAnnotations;

namespace shop_system.Models.Client
{
    public class CreateClientNoAddressDto
    {
        public string InvoiceType { get; set; }
        public string Name { get; set; }
        public string? NIP { get; set; }
        public string? Notes { get; set; }
        public int AddressId { get; set; }
    }
}
