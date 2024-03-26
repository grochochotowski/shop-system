using System.ComponentModel.DataAnnotations;

namespace shop_system.Models.Client
{
    public class CreateClientAddressIdDto
    {
        public string InvoiceType { get; set; }
        public string ClientName { get; set; }
        public string? NIP { get; set; }
        public string? Notes { get; set; }
        public int AddressId { get; set; }

        public CreateClientAddressIdDto(string InvoiceType, string ClientName, string? NIP, string? Notes, int AddressId)
        {
            this.InvoiceType = InvoiceType;
            this.ClientName = ClientName;
            this.NIP = NIP;
            this.Notes = Notes;
            this.AddressId = AddressId;
        }
    }
}
