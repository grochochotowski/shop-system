using AutoMapper;
using shop_system.Entities;
using shop_system.Models;

namespace shop_system.Services
{
    public interface IClothingAvailabilityService
    {
        int Create(int shopId, CreateClothingAvailabilityDto dto);
        IEnumerable<GetClothesFromShopDto> Get(int shopId);
    }

    public class ClothingAvailabilityService : IClothingAvailabilityService
    {
        private readonly ShopDbContext _context;
        private readonly IMapper _mapper;

        public ClothingAvailabilityService(ShopDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }


        public IEnumerable<GetClothesFromShopDto> Get(int shopId)
        {
            var availability = _context
                .ClothingAvailability
                .Where(ca => ca.ShopId == shopId)
                .ToList();

            var result = _mapper.Map<List<GetClothesFromShopDto>>(availability);

            return result;
        } // Get all clothes that are in a shop by ID

        public int Create(int shopId, CreateClothingAvailabilityDto dto)
        {
            var shop = _context
                .Shops
                .FirstOrDefault(s => s.Id == shopId);
            if (shop is null) return -1;

            var availabilityEntity = _mapper.Map<ClothingAvailability>(dto);
            availabilityEntity.ShopId = shopId;
            _context.ClothingAvailability.Add(availabilityEntity);
            _context.SaveChanges();
            return availabilityEntity.Id;
        } // Add clothing to shop by ID
    }
}
