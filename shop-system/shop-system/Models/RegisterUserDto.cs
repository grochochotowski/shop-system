using System.ComponentModel.DataAnnotations;

namespace shop_system.Models
{
    public class RegisterUserDto
    {
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
        [MinLength(6)]
        public string Password { get; set; }
        [Required]
        [MinLength(6)]
        public string ConfirmPassword { get; set; }
        [Required]
        public string PhoneNumber { get; set; }
        public int? ShopId { get; set; }
        [Required]
        public int PositionId { get; set; }
    }
}
