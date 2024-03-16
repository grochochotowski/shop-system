using System.ComponentModel.DataAnnotations;

namespace shop_system.Models.Client
{
    public class ClientDto
    {
        public string Name { get; set; }
        public string? Notes { get; set; }
        public int AddressId { get; set; }
    }
}
