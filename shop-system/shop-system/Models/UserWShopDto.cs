using shop_system.Entities;
using System.ComponentModel.DataAnnotations;

namespace shop_system.Models
{
    public class UserWShopDto
    {
        public string? Code { get; set; }
        public int PositionId { get; set; }
        public string Login { get; set; }
        public string FirstName { get; set; }
        public string? SecondName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }


        public virtual Position Position { get; set; }
        public virtual Shop Shop { get; set; }
    }
}
