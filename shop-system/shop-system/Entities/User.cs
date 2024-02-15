using Microsoft.Identity.Client;

namespace shop_system.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string SecondName { get; set; }
        public string LastName { get; set; }
        public string Login { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string PhoneNumber { get; set; }
        public int? ShopId { get; set; }
        public int PositionId { get; set; }
    }
}
