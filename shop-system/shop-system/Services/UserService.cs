using AutoMapper;
using shop_system.Entities;
using shop_system.Models;
using System.Collections.Generic;
using System.Linq;

namespace shop_system.Services
{
    public interface IUserService
    {
        IEnumerable<GetShopsWithUsers> GetAllUsersWithShop();
    }

    public class UserService : IUserService
    {
        private readonly ShopDbContext _context;
        private readonly IMapper _mapper;

        public UserService(ShopDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public IEnumerable<GetShopsWithUsers> GetAllUsersWithShop()
        {
            var shopsWithUsers = (from s in _context.Shops
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
                                  }).ToList();

            var result = _mapper.Map<List<GetShopsWithUsers>>(shopsWithUsers);

            return result;
        } // Get all users with their shops
    }
}
