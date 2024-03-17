using AutoMapper;
using shop_system.Entities;
using shop_system.Models.Client;

namespace shop_system.Services
{
    public interface IClientService
    {
        int CreateClient(CreateClientDto dto);
    }

    public class ClientService : IClientService
    {
        private readonly ShopDbContext _context;
        private readonly IMapper _mapper;

        public ClientService(ShopDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }


        // Create new client
        public int CreateClient(CreateClientDto dto)
        {
            var existingAddress = _context.Addresses.FirstOrDefault(a =>
                a.Country == dto.Country &&
                a.City == dto.City &&
                a.Street == dto.Street &&
                a.Building == dto.Building &&
                a.Premises == dto.Premises &&
                a.PostalCode == dto.PostalCode);

            if (existingAddress != null)
            {
                CreateClientNoAddressDto newDto = new CreateClientNoAddressDto
                    (dto.InvoiceType, dto.Name, dto.NIP, dto.Notes, existingAddress.Id );

                var client = _mapper.Map<Client>(newDto);
            }
            else
            {
                var client = _mapper.Map<Client>(dto);
            }

            _context.Clients.Add(client);
            _context.SaveChanges();

            return client.Id;
        }
    }
}
