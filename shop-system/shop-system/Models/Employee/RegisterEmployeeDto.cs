using System.ComponentModel.DataAnnotations;

namespace shop_system.Models.Employee
{
    public class RegisterEmployeeDto
    {
        [Required]
        public string FirstName { get; set; }
        public string? SecondName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        [MinLength(5)]
        [MaxLength(10)]
        public string Login { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        [MinLength(5)]
        [MaxLength(25)]
        public string Password { get; set; }
        [Required]
        [MinLength(5)]
        [MaxLength(25)]
        public string ConfirmPassword { get; set; }
        [Required]
        public string PhoneNumber { get; set; }



        [Required]
        public int PositionId { get; set; }



        public int? ShopId { get; set; }
    }
}
