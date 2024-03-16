using AutoMapper;
using shop_system.Entities;
using shop_system.Models.Client;

namespace shop_system.Services
{
    public class ClientService
    {
        private readonly ShopDbContext _context;
        private readonly IMapper _mapper;

        public ClientService(ShopDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }


        // Create new client
        public int Add(CreateClientDto dto)
        {
            var client = _mapper.Map<Client>(dto);
            _context.Clients.Add(client);
            _context.SaveChanges();

            return client.Id;
        }
    }
}
