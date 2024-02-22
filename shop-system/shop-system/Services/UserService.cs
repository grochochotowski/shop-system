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
        IEnumerable<UserWShopDto> GetAllUsersWithShop();
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

        public IEnumerable<UserWShopDto> GetAllUsersWithShop()
        {
            var query = from user in _context.Users
                        join shop in _context.Shops on user.ShopId equals shop.Id into userShopJoin
                        from userShop in userShopJoin.DefaultIfEmpty()
                        orderby userShop.Id, user.PositionId
                        select new
                        {
                            userShop.Code,
                            user.PositionId,
                            user.Login,
                            user.FirstName,
                            user.SecondName,
                            user.LastName,
                            user.Email,
                            user.PhoneNumber
                        };

            var usersWShop = query.ToList();

            var result = _mapper.Map<List<UserWShopDto>>(usersWShop);

            return result;
        } // Get all users with their shops
    }
}
