using AutoMapper;
using shop_system.Entities;
using shop_system.Models;
using shop_system.Serivces;

namespace shop_system.Services
{
    public class UserService
    {
        public interface IShopService
        {
            IEnumerable<ShopDto> GetAll();
        }

        public class ShopService : IShopService, IShopService
        {
            private readonly ShopDbContext _context;
            private readonly IMapper _mapper;

            public ShopService(ShopDbContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }



            public IEnumerable<ShopDto> GetAll()
            {
                var shops = _context
                    .Shops
                    .Include(s => s.Clothes)
                        .ThenInclude(ca => ca.Clothing)
                    .ToList();

                var result = _mapper.Map<List<ShopDto>>(shops);

                return result;
            } // Get all users with their shops
        }
    }
}
