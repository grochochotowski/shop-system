using AutoMapper;
using shop_system.Entities;
using shop_system.Models.Client;
using shop_system.Models.Clothing;
using shop_system.Models.ClothingAvailability;
using shop_system.Models.Shop;
using System.Diagnostics.Metrics;
using System.IO;
using System.Runtime.InteropServices;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace shop_system
{
    public class ShopMappingProfile : Profile
    {
        public ShopMappingProfile()
        {
            CreateMap<Client, ClientDto>();
            CreateMap<CreateClientNoAddressDto, Client>();
            CreateMap<CreateClientDto, Client>()
                .ForMember(c => c.Address, c => c.MapFrom(dto => new Address()
                {
                    Country = dto.Country,
                    City = dto.City,
                    Street = dto.Street,
                    Building = dto.Building,
                    Premises = dto.Premises,
                    PostalCode = dto.PostalCode,
                }));


            CreateMap<Shop, ShopDto>();
            CreateMap<CreateShopDto, Shop>();


            CreateMap<ClothingAvailability, ClothingAvailabilityDto>();


            CreateMap<Clothing, ClothingDto>();
            CreateMap<CreateClothingDto, Clothing>();


        }
    }
}
