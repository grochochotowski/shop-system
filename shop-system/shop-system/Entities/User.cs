using Microsoft.Identity.Client;

namespace shop_system.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string firstName { get; set; }
        public string secondName { get; set; }
        public string lastName { get; set; }
        public string position { get; set; }
        public string email { get; set; }
        public string phoneNumber { get; set; }
    }
}
