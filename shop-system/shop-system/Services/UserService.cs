using AutoMapper;
using Microsoft.EntityFrameworkCore;
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
            var query = from user in _context.Users
                        join shop in _context.Shops on user.ShopId equals shop.Id into userShopJoin
                        from userShop in userShopJoin.DefaultIfEmpty()
                        orderby userShop.Id, user.PositionId
                        select new
                        {
                            ShopCode = userShop.Code,
                            user.PositionId,
                            user.Login,
                            user.FirstName,
                            user.SecondName,
                            user.LastName,
                            user.Email,
                            user.PhoneNumber
                        };

            var shopsWithUsers = query.ToList();
            /*join u in _context.Users on s.Id equals u.ShopId into userGroup
                              from user in userGroup.DefaultIfEmpty()
                              orderby s.Id, user != null ? user.PositionId : 0
                              select new
                              {
                                  Code = s.Code,
                                  PositionId = user != null ? user.PositionId : 0,
                                  Login = user != null ? user.Login : null,
                                  FirstName = user != null ? user.FirstName : null,
                                  SecondName = user != null ? user.SecondName : null,
                                  LastName = user != null ? user.LastName : null,
                                  Email = user != null ? user.Email : null,
                                  PhoneNumber = user != null ? user.PhoneNumber : null
                              }).ToList();*/

            var result = _mapper.Map<List<GetShopsWithUsers>>(shopsWithUsers);

            return result;
        } // Get all users with their shops
    }
}
