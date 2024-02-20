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

        public class ShopService : IShopService
        {
            private readonly ShopDbContext _context;
            private readonly IMapper _mapper;

            public ShopService(ShopDbContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }



            public IEnumerable<GetUsersWithShopDto> GetAll()
            {
                var shopsWithUsers = from s in _context.Shops
                                     join u in _context.Users on s.Id equals u.ShopId into userGroup
                                     from user in userGroup.DefaultIfEmpty()
                                     orderby s.Id, user.PositionId
                                     select new
                                     {
                                         Code = s.Code,
                                         PositionId = user.PositionId,
                                         Login = user.Login,
                                         FirstName = user.FirstName,
                                         SecondName = user.SecondName,
                                         LastName = user.LastName,
                                         Email = user.Email,
                                         PhoneNumber = user.PhoneNumber
                                     };

                var result = _mapper.Map<List<GetUsersWithShopDto>>(shopsWithUsers);

                return result;
            } // Get all users with their shops
        }
    }
}
