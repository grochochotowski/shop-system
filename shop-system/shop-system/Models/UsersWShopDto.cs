using System.ComponentModel.DataAnnotations;

namespace shop_system.Models
{
    public class UsersWShopDto
    {
        public string? Code { get; set; }
        public int PositionId { get; set; }
        public string Login { get; set; }
        public string FirstName { get; set; }
        public string? SecondName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
    }
}
