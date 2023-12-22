using Microsoft.AspNetCore.Mvc;
using shop_system.Entities;

namespace shop_system.Controllers
{
    [Route("api/shop")]
    public class ShopController : ControllerBase
    {
        private readonly ShopDbContext _context;
        public ShopController(ShopDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Shop>> GetAll()
        {
            var shops = _context
                .Shops
                .ToList();
            return Ok(shops);
        }

        [HttpGet("{id}")]
        public ActionResult<Shop> Get([FromRoute] int id)
        {
            var shop = _context
                .Shops
                .FirstOrDefault(s => s.Id == id);
            if (shop is null) return NotFound($"Shop with id: {id} does not exist");
            return Ok(shop);
        }
    }
}
