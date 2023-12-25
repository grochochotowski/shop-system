using AutoMapper;
using shop_system.Entities;
using shop_system.Models;

namespace shop_system.Services
{
    public interface IClothingAvailabilityService
    {
        int Create(int shopId, ClothingAvailabilityDto dto);
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


        public int Create(int shopId, ClothingAvailabilityDto dto)
        {
            var shop = _context
                .Shops
                .FirstOrDefault(s => s.Id == shopId);
            if (shop is null) return -1;

            var availabilityEntity = _mapper.Map<ClothingAvailability>(dto);
            _context.ClothingAvailability.Add(availabilityEntity);
            _context.SaveChanges();
            return availabilityEntity.Id;
        }
    }
}
