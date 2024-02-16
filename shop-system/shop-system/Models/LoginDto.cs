using System.ComponentModel.DataAnnotations;

namespace shop_system.Models
{
    public class LoginDto
    {
        [Required]
        public string Login { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
