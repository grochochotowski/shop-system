using System.ComponentModel.DataAnnotations;

namespace shop_system.Models.Employee
{
    public class EmployeeLoginDto
    {
        [Required]
        public string Login { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
