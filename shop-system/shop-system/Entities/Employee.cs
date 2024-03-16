using Microsoft.Identity.Client;
using System.ComponentModel.DataAnnotations;

namespace shop_system.Entities
{
    public class Employee
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string FirstName { get; set; }
        public string? SecondName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string Login { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string PhoneNumber { get; set; }



        [Required]
        public int PositionId { get; set; }
        public virtual Position Position { get; set; }



        public int? ShopId { get; set; }
        public virtual Shop? Shop { get; set; }
    }
}
