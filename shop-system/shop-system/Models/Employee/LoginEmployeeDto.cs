using System.ComponentModel.DataAnnotations;

namespace shop_system
{
    public class LoginEmployeeDto
    {
        [Required]
        public string Login { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
