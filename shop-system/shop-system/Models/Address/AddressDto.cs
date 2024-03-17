using System.ComponentModel.DataAnnotations;

namespace shop_system.Models.Address
{
    public class AddressDto
    {
        public string Country { get; set; }
        public string City { get; set; }
        public string Street { get; set; }
        public string Building { get; set; }
        public string? Premises { get; set; }
        public string PostalCode { get; set; }
    }
}
