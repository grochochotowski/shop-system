using shop_system.Models.Address;
using System.ComponentModel.DataAnnotations;

namespace shop_system.Models.Client
{
    public class ClientDto
    {
        public int Id { get; set; }
        public string InvoiceType { get; set; }
        public string ClientName { get; set; }
        public string? NIP { get; set; }
        public string? Notes { get; set; }



        public int AddressId { get; set; }
        public AddressDto Address { get; set; }
    }
}
