using AutoMapper;
using Microsoft.EntityFrameworkCore;
using shop_system.Entities;
using shop_system.Models.Client;

namespace shop_system.Services
{
    public interface IClientService
    {
        int CreateClient(CreateClientAddressPropsDto dto);
        IEnumerable<ClientDto> GetAllClients();
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
        public int CreateClient(CreateClientAddressPropsDto dto)
        {
            Address? existingAddress = _context.Addresses.FirstOrDefault(a =>
                a.Country == dto.Country &&
                a.City == dto.City &&
                a.Street == dto.Street &&
                a.Building == dto.Building &&
                a.Premises == dto.Premises &&
                a.PostalCode == dto.PostalCode);

            Client client;
            if (existingAddress != null)
            {
                CreateClientAddressIdDto newDto = new CreateClientAddressIdDto
                    (dto.InvoiceType, dto.Name, dto.NIP, dto.Notes, existingAddress.Id );

                client = _mapper.Map<Client>(newDto);
            }
            else
            {
                client = _mapper.Map<Client>(dto);
            }

            _context.Clients.Add(client);
            _context.SaveChanges();

            return client.Id;
        }
    
    
        // Get all clients
        public IEnumerable<ClientDto> GetAllClients()
        {
            var clients = _context.Clients.Include(c => c.Address).ToList();
            var clientDtos = _mapper.Map<List<ClientDto>>(clients);
            return clientDtos;
        }
    }
}
