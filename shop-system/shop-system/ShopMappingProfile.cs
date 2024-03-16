using AutoMapper;
using shop_system.Entities;
using shop_system.Models.Client;
using shop_system.Models.Clothing;
using shop_system.Models.ClothingAvailability;
using shop_system.Models.Shop;
using System.Runtime.InteropServices;

namespace shop_system
{
    public class ShopMappingProfile : Profile
    {
        public ShopMappingProfile()
        {
            CreateMap<Client, ClientDto>();
            CreateMap<ClientDto, Client>();


            CreateMap<Shop, ShopDto>();
            CreateMap<CreateShopDto, Shop>();


            CreateMap<ClothingAvailability, ClothingAvailabilityDto>();


            CreateMap<Clothing, ClothingDto>();
            CreateMap<CreateClothingDto, Clothing>();


        }
    }
}
