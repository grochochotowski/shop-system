using AutoMapper;
using shop_system.Entities;

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
    }
}
