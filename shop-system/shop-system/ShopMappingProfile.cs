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
            CreateMap<AddShopDto, Shop>();

            CreateMap<ClothingAvailability, ClothingAvailabilityDto>();
            CreateMap<CreateClothingAvailabilityDto, ClothingAvailability>();
            CreateMap<ClothingAvailability, GetClothesFromShopDto>();

            CreateMap<Clothing, ClothingDto>();
            CreateMap<AddClothingDto, Clothing>();

            CreateMap<UserWShop, UsersWShopDto>();
        }
    }
}
