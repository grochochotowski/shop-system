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
            var usersWShop =
                _context.Users
                .Include(u => u.Shop)
                .Include(u => u.Position)
                .OrderBy(s => s.Shop.Code)
                .OrderBy(p => p.PositionId);

            var result = _mapper.Map<List<UserWShopDto>>(usersWShop);

            return result;
        } // Get all users with their shops
    }
}
