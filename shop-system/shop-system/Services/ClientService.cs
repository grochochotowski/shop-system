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

            if (existingAddress == null)
            {
                var newAddress = _mapper.Map<Address>(dto);
                _context.Addresses.Add(newAddress);
                _context.SaveChanges();
                dto.AddressId = newAddress.Id;
            }
            else
            {
                dto.AddressId = existingAddress.Id;
            }


            var client = _mapper.Map<Client>(dto);
            _context.Clients.Add(client);
            _context.SaveChanges();

            return client.Id;
        }
    }
}
