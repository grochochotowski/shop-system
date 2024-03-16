using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Conventions;
using shop_system.Entities;
using shop_system.Exceptions;
using shop_system.Models;

namespace shop_system.Serivces
{
    public interface IShopService
    {
        int Add(ShopCreateDto dto);
        void Delete(int id);
        ShopDto Get(int id);
        IEnumerable<ShopDto> GetAll();
    }

    public class ShopService : IShopService
    {
        private readonly ShopDbContext _context;
        private readonly IMapper _mapper;
        private readonly ILogger<ShopService> _logger;

        public ShopService(ShopDbContext context, IMapper mapper, ILogger<ShopService> logger)
        {
            _context = context;
            _mapper = mapper;
            _logger = logger;
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
        } // Get all shops

        public ShopDto Get(int id)
        {
            var shop = _context
                .Shops
                .Include(s => s.Clothes)
                    .ThenInclude(ca => ca.Clothing)
                .FirstOrDefault(s => s.Id == id);

            if (shop is null) throw new NotFoundException("Shop not found");
            var result = _mapper.Map<ShopDto>(shop);
            return result;
        } // Get shop by ID

        public int Add(ShopCreateDto dto)
        {
            var shop = _mapper.Map<Shop>(dto);
            _context.Shops.Add(shop);
            _context.SaveChanges();

            return shop.Id;
        } // Add new shop

        public void Delete(int id) // !!! Delete shop by ID
        {
            _logger.LogWarning($"Shop delete action invoked: id = {id}");

            var shop = _context
                .Shops
                .FirstOrDefault(s => s.Id == id);

            if (shop is null) throw new NotFoundException("Shop not found");

            _context.Shops.Remove(shop);
            _context.SaveChanges();

            // it is needed here to remove all clothes with ShopId == id from ClothingAvailability
        }
    }
}
