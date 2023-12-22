using AutoMapper;
using shop_system.Entities;
using shop_system.Models;
using System.Runtime.InteropServices;

namespace shop_system
{
    public class ShopMappingProfile : Profile
    {
        public ShopMappingProfile()
        {
            CreateMap<Shop, ShopDto>();
            CreateMap<ClothingAvailability, ClothingAvailabilityDto>();
            CreateMap<Clothing, ClothingDto>();

            CreateMap<AddShopDto, Shop>();
        }
    }
}
