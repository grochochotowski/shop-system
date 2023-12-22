using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using shop_system.Entities;
using shop_system.Models;

namespace shop_system.Controllers
{
    [Route("api/shop")]
    public class ShopController : ControllerBase
    {
        private readonly ShopDbContext _context;
        private readonly IMapper _mapper;

        public ShopController(ShopDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public ActionResult<IEnumerable<ShopDto>> GetAll()
        {
            var shops = _context
                .Shops
                .ToList();
            var shopsDtos = _mapper.Map<List<ShopDto>>(shops);

            return Ok(shopsDtos);
        }

        [HttpGet("{id}")]
        public ActionResult<ShopDto> Get([FromRoute] int id)
        {
            var shop = _context
                .Shops
                .FirstOrDefault(s => s.Id == id);
            var shopDto = _mapper.Map<ShopDto>(shop);

            if (shopDto is null) return NotFound($"Shop with id: {id} does not exist");
            return Ok(shopDto);
        }

        [HttpPost]
        public ActionResult AddShop([FromBody] AddShopDto dto)
        {
            var shop = _mapper.Map<Shop>(dto);
            _context.Shops.Add(shop);
            _context.SaveChanges();

            return Created($"api/shop/{shop.Id}", null);
        }
    }
}
